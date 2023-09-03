import { Question } from './types.question'

export interface Guest {
    _GUEST_ID: string;
    _GUEST_CREATED_AT: Date;
    _GUEST_UPDATED_AT: Date;
    _GUEST_ADMIN: boolean;
    _GUEST_SUBSCRIPTION: number;
    _GUEST_IP_ADDRESS: string;
    _GUEST_PASSCODE: string;
    _GUEST_PASSCODE_CONFIRMED: boolean;
    _GUEST_EMAIL: string;
    _GUEST_EMAIL_CONFIRMED: boolean;
    _GUEST_DEFAULT_LANGUAGE: string;
    _GUEST_DEFAULT_ROUTE: string;
    _GUEST_POINTS_TOTAL: number;
    _GUEST_POINTS_JAVASCRIPT: number;
    _GUEST_POINTS_JAVA: number;
    _GUEST_POINTS_PYTHON: number;
    _GUEST_COURSES: string;
}

export type Course = {
    _COURSE_ID: string;
    _COURSE_CREATED_AT: Date;
    _COURSE_UPDATED_AT: Date;
    _COURSE_COMPLETED_AT: Date | null;
    _COURSE_SUBJECT: string;
    _COURSE_ITEMS: Question[] | null;
    _COURSE_COMPLETE: boolean;
    _COURSE_POINTS: number;
};