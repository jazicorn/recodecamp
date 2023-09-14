import { Request, Response } from 'express';
import Router from 'express-promise-router';
import { Guest } from '../../classes/guest';
import { _Guest } from  '../../types/types.guest';
import sql from '../../config/db';
import cors from 'cors';
import { z } from "zod";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import * as dotenv from 'dotenv';

dotenv.config();

class Guest_Routes {
    /**Public: Get Guest by ID*/
    public pathGuest = '/guest/:id';
    /**Public: Validate Guest*/
    public pathGuestLogin = '/guest/login';
    /**Public: Guest Registers Passcode*/
    public pathGuestRegister = '/guest/register';
    /**Public: Update Guest*/
    public pathGuestUpdate = '/guest/update/:id';
    /**Private: Admin Deletes Guest*/
    public pathGuestDelete = '/guest/delete/:id';
    /**Private: Admin Gets All Guests*/
    public pathGuestAll = '/guest/all';
    /**Public: Create Guest*/
    public pathGuestNew = '/guest/new';
    /**Express Router*/
    public router = Router();
    /**Cors Options*/
    private corsOptions = cors({
        origin: process.env.WEBURL,
        optionsSuccessStatus: 200
    });

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.pathGuest, this.guestId);
        this.router.post(this.pathGuestLogin, this.guestLogin);
        this.router.get(this.pathGuestRegister, this.guestRegister);
        this.router.get(this.pathGuestAll, this.corsOptions, this.guestAll);
        this.router.post(this.pathGuestNew, this.guestNew);
        this.router.put(this.pathGuestUpdate, this.guestUpdate);
        this.router.delete(this.pathGuestDelete, this.corsOptions, this.guestDelete);
    }

    /**Public: Get Guest by ID*/
    public guestId = async (req: Request, res: Response) => {
        switch(req.method) {
            case('GET'):
                try {
                    const id = req.params.id;
                    const data = await sql`SELECT * FROM _GUEST WHERE _ID = ${id}`;
                    return res.status(200).send(data);
                } catch {
                    return res.status(500).send({ error: "Something went wrong"});
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        };
    };
    /**Public: Update Guest by ID*/
    public guestUpdate = async (req: Request, res: Response) => {
        switch(req.method) {
            case('PUT'):
                 try {
                    const id = req.params.id;
                    const data = await sql`SELECT * FROM _GUEST WHERE _ID = ${id}`;
                    return res.status(200).send(data);
                } catch {
                    return res.status(500).send({ error: "Something went wrong"});
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        };
    };
    /**Public: Guest Registers Passcode*/
    public guestRegister = async (req: Request, res: Response) => {
        switch(req.method) {
            case('POST'):
                 try {
                    const { email, passcode } = req.body;
                    const data = await sql`SELECT * FROM _GUEST WHERE _PASSCODE = ${passcode} AND _EMAIL = ${email}`;
                    return res.status(200).send(data);
                } catch {
                    return res.status(500).send({ error: "Something went wrong"});
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        };
    };
    /**Private: Admin Gets All Guests*/
    public guestAll = async (req: Request, res: Response) => {
        switch(req.method) {
            case('GET'):
                 try {
                    const id = req.params.id;
                    const data = await sql`SELECT * FROM _GUEST`;
                    return res.status(200).send(data);
                } catch {
                    return res.status(500).send({ error: "Something went wrong"});
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        };
    };
    /**Public: Create Guest*/
    public guestNew = async (req: Request, res: Response) => {
        //console.log("route: api/guest/new")
        switch(req.method) {
            case('POST'):
                try {
                    const data = req.body;
                    const guestIP = req.socket.remoteAddress;
                    const validIP = z.string().ip(guestIP);
                    const validEmail = z.string().email(data._EMAIL);
                    const validPasswordMin = z.string().min(8,data._PASSWORD);
                    const validPasswordMax = z.string().max(16,data._PASSWORD);
                    const validPasswordRegex = z.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$,;%^*-]).{8,16}$/,data._PASSWORD);
                    //console.log('validIP', validIP);
                    //console.log('validEmail', validEmail);
                    if(!validIP) {
                        return res.status(400).send({ error: "Guest Network Error" });
                    } else if(!validEmail) {
                        return res.status(400).send({ error: "Invalid Email" });
                    } else if(!validPasswordMin) {
                        return res.status(400).send({ error: "Password Not Minimum Length" });
                    } else if(!validPasswordMax) {
                        return res.status(400).send({ error: "Password Bigger than Max Length" });
                    } else if(!validPasswordRegex) {
                        return res.status(400).send({ error: "Password Requires At Least One Special Character" });
                    } else if(validIP && validEmail && validPasswordMin && validPasswordMax && validPasswordRegex) {
                        const guest = new Guest(data);
                        // set user ip address
                        guest._IP_ADDRESS = guestIP as string;
                        // Encrypt user password
                        const encryptedPassword = await bcrypt.hash(data._PASSWORD, 10);
                        // set encrypted password
                        guest._PASSWORD = encryptedPassword;
                        // convert courses to string value
                        guest._COURSES = guest._COURSES.toString();
                        // guest after updates
                        //console.log("guest", guest);
                        const createGuest = await sql`INSERT INTO _GUEST(
                        _ID,
                        _CREATED_AT,
                        _UPDATED_AT,
                        _ACCESS_TOKEN,
                        _FIRST_LOGIN,
                        _ADMIN,
                        _SUBSCRIPTION,
                        _IP_ADDRESS,
                        _PASSCODE,
                        _PASSCODE_CONFIRMED,
                        _EMAIL,
                        _EMAIL_CONFIRMED,
                        _EMAIL_PASSCODE,
                        _PASSWORD,
                        _DEFAULT_LANGUAGE,
                        _DEFAULT_ROUTE,
                        _POINTS_TOTAL,
                        _POINTS_JAVASCRIPT,
                        _POINTS_JAVA,
                        _POINTS_PYTHON,
                        _COURSES)
                        VALUES (
                            ${guest._ID},
                            ${guest._CREATED_AT},
                            ${guest._UPDATED_AT},
                            ${guest._ACCESS_TOKEN},
                            ${guest._FIRST_LOGIN},
                            ${guest._ADMIN},
                            ${guest._SUBSCRIPTION},
                            ${guest._IP_ADDRESS},
                            ${guest._PASSCODE},
                            ${guest._PASSCODE_CONFIRMED},
                            ${guest._EMAIL},
                            ${guest._EMAIL_CONFIRMED},
                            ${guest._EMAIL_PASSCODE},
                            ${guest._PASSWORD},
                            ${guest._DEFAULT_LANGUAGE},
                            ${guest._DEFAULT_ROUTE},
                            ${guest._POINTS_TOTAL},
                            ${guest._POINTS_JAVASCRIPT},
                            ${guest._POINTS_JAVA},
                            ${guest._POINTS_PYTHON},
                            ${guest._COURSES})`;
                        const getGuest = await sql`SELECT * FROM _GUEST WHERE _ID = ${guest._ID}`;
                        //console.log("guest info:", getGuest);
                        if(getGuest !== undefined) {
                            return res.sendStatus(200);
                        } else {
                            return res.status(500).send({ error: "Guest Creation Error" });
                        }
                    } else {
                        return res.status(400).send({ error: "Invalid Data" });
                    }
                } catch {
                    return res.status(500).send({ error: "Database Connection Error" });
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    };
    /**Public: Login Guest*/
    public guestLogin = async (req: Request, res: Response) => {
        switch(req.method) {
            case('POST'):
                try {
                    const data = req.body;
                    //console.log(data);

                    // Check Email in database
                    const getGuest = await sql`SELECT * FROM _GUEST WHERE _EMAIL = ${data._EMAIL}`;
                    const guestResult = getGuest[0];
                    //console.log("guestResult:", guestResult)

                    // Check Guest IP Address
                    const guestIP = req.socket.remoteAddress;
                    const validIP = z.string().ip(guestIP);
                    // Check Email & Password
                    const validEmail = data._EMAIL === guestResult._email;
                    //console.log("validEmail", validEmail);
                    // Compare Encrypted Password
                    const validPasswordCompare = bcrypt.compareSync(
                        data._PASSWORD,
                        guestResult._password
                    );
                    //console.log("validPasswordCompare:", validPasswordCompare);
                    // uppercase guestResult keys
                    Object.entries(guestResult).forEach(([key, value]) => {
                        guestResult[key.toUpperCase()] = guestResult[key];
                        //console.log(`${key}: ${value}`);
                    });
                    // Create Guest Object
                    const guestObj = new Guest(guestResult);
                    //console.log("guest:", guestObj);
                    // Set Guest IP Address
                    guestObj._IP_ADDRESS = guestIP as string;
                    // Create Token
                    const getToken = jwt.sign({ _ID: guestObj._ID, _EMAIL: guestObj._EMAIL }, process.env.SECRET_TOKEN, {
                        algorithm: 'HS256',
                        allowInsecureKeySizes: true,
                        expiresIn: 86400, // 24 hours
                    });
                    // Save Guest Token
                    guestObj._ACCESS_TOKEN = getToken;

                    //console.log("guestObj:", guestObj)

                    if(!validIP) {
                        return res.status(400).send({ error: "User Network Error" });
                    } else if(!validEmail || !validPasswordCompare) {
                        return res.status(400).send({ error: "Invalid Guest Information" });
                    } else if(validIP && validEmail && validPasswordCompare) {
                        return res.status(200).send({data: guestObj});
                    } else {
                        return res.status(400).send({ error: "Invalid Data" });
                    }
                } catch {
                    return res.status(500).send({ error: "Database Connection Error" });
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    };
    /**Private: Admin Deletes Guest*/
    public guestDelete = async (req: Request, res: Response) => {
        switch(req.method) {
            case('DELETE'):
                 try {
                    const id = req.params.id;
                    const results = await sql`DELETE * FROM _GUEST WHERE _ID = ${id}`;
                    return res.status(200);
                } catch {
                    return res.status(500).send({ error: "Something went wrong"});
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        };
    };
}

export default Guest_Routes;