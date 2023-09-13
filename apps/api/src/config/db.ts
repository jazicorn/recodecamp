// Node Postgres Docs: https://github.com/porsager/postgres
const postgres = require('postgres');
import * as dotenv from 'dotenv';

dotenv.config();
const { DATABASE_URL } = process.env

const sql = postgres(DATABASE_URL, {ssl: 'require'});

async function seedDB() {
    await sql`DROP TABLE IF EXISTS _GUEST;
    CREATE TABLE IF NOT EXISTS _GUEST(
    _GUEST_ID UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    _GUEST_CREATED_AT DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    _GUEST_UPDATED_AT DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    _GUEST_ACCESS_TOKEN VARCHAR(255) NOT NULL,
    _GUEST_FIRST_LOGIN BOOLEAN NOT NULL DEFAULT false,
    _GUEST_ADMIN BOOLEAN NOT NULL DEFAULT false,
    _GUEST_SUBSCRIPTION VARCHAR(50) NOT NULL,
    _GUEST_IP_ADDRESS VARCHAR(50) NOT NULL,
    _GUEST_PASSCODE UUID NOT NULL DEFAULT gen_random_uuid(),
    _GUEST_PASSCODE_CONFIRMED BOOLEAN NOT NULL DEFAULT false,
    _GUEST_EMAIL VARCHAR(50) UNIQUE NOT NULL,
    _GUEST_EMAIL_CONFIRMED BOOLEAN NOT NULL DEFAULT false,
    _GUEST_EMAIL_PASSCODE UUID NOT NULL DEFAULT gen_random_uuid(),
    _GUEST_PASSWORD VARCHAR(100) NOT NULL,
    _GUEST_DEFAULT_LANGUAGE VARCHAR(30) NOT NULL,
    _GUEST_DEFAULT_ROUTE VARCHAR(50) NOT NULL,
    _GUEST_POINTS_TOTAL INT NOT NULL,
    _GUEST_POINTS_JAVASCRIPT INT NOT NULL,
    _GUEST_POINTS_JAVA INT NOT NULL,
    _GUEST_POINTS_PYTHON INT NOT NULL,
    _GUEST_COURSES VARCHAR(255) NOT NULL);`.simple();
}

seedDB();

export default sql;
