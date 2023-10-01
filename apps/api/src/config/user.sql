CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

--- --- ---

DROP TABLE IF EXISTS _USER;

CREATE TABLE IF NOT EXISTS _USER(
  _ID UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  _CREATED_AT DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  _UPDATED_AT DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  _GUEST BOOLEAN NOT NULL DEFAULT false,
  _ADMIN BOOLEAN NOT NULL DEFAULT false,
  _ACCESS_TOKEN VARCHAR(255) NOT NULL,
  _FIRST_LOGIN BOOLEAN NOT NULL DEFAULT false,
  _SUBSCRIPTION VARCHAR(255) NOT NULL,
  _IP_ADDRESS VARCHAR(255) NOT NULL,
  _PASSCODE UUID NOT NULL DEFAULT gen_random_uuid(),
  _PASSCODE_CONFIRMED BOOLEAN NOT NULL DEFAULT false,
  _EMAIL VARCHAR(50) UNIQUE NOT NULL,
  _EMAIL_CONFIRMED BOOLEAN NOT NULL DEFAULT false,
  _EMAIL_PASSCODE UUID NOT NULL DEFAULT gen_random_uuid(),
  _PASSWORD VARCHAR(30) NOT NULL,
  _USERNAME VARCHAR(30) NOT NULL,
  _FIRST_NAME VARCHAR(30) NOT NULL,
  _LAST_NAME VARCHAR(30) NOT NULL,
  _SOCIAL_HANDLE_GITHUB VARCHAR(30) NOT NULL,
  _SOCIAL_HANDLE_GOOGLE VARCHAR(30) NOT NULL,
  _SOCIAL_HANDLE_APPLE VARCHAR(30) NOT NULL,
  _SOCIAL_HANDLE_FACEBOOK VARCHAR(30) NOT NULL,
  _SOCIAL_HANDLE_TWITTER VARCHAR(30) NOT NULL,
  _SOCIAL_HANDLE_LINKEDIN VARCHAR(30) NOT NULL,
  _DEFAULT_LANGUAGE VARCHAR(30) NOT NULL,
  _DEFAULT_ROUTE VARCHAR(50) NOT NULL,
  _POINTS_TOTAL INT NOT NULL,
  _COURSES VARCHAR(255) NOT NULL
);

--- --- ---

DROP TABLE IF EXISTS _USER_POINTS;

CREATE TABLE IF NOT EXISTS _USER_POINTS(
  _USER_POINTS_ID UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  _USER_POINTS_CREATED_AT DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  _USER_POINTS_UPDATED_AT DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  _USER_POINTS_TOTAL INT NOT NULL,
  _USER_POINTS_JAVASCRIPT INT NOT NULL,
  _USER_POINTS_JAVA INT NOT NULL,
  _USER_POINTS_PYTHON INT NOT NULL,
  _USER_ID UUID NOT NULL,
  CONSTRAINT fk_user
    FOREIGN KEY(_USER_ID)
	  REFERENCES _USER(_USER_ID),
);

--- --- ---

DROP TABLE IF EXISTS _USER_POINTS_JAVASCRIPT;

CREATE TABLE IF NOT EXISTS _USER_POINTS_JAVASCRIPT(
  _USER_JAVASCRIPT_ID UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  _USER_JAVASCRIPT_CREATED_AT DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  _USER_JAVASCRIPT_UPDATED_AT DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  _USER_JAVASCRIPT_TOTAL INT NOT NULL,
  _USER_JAVASCRIPT_COMMENTS INT NOT NULL,
  _USER_JAVASCRIPT_VARIABLES INT NOT NULL,
  _USER_JAVASCRIPT_ARRAYS INT NOT NULL,
  _USER_JAVASCRIPT_OBJECTS INT NOT NULL,
  _USER_JAVASCRIPT_FUNCTIONS INT NOT NULL,
  _USER_ID UUID NOT NULL,
  CONSTRAINT fk_user
    FOREIGN KEY(_USER_ID)
	  REFERENCES _USER(_USER_ID),
);

--- --- ---

DROP TABLE IF EXISTS _USER_POINTS_JAVA;

CREATE TABLE IF NOT EXISTS _USER_POINTS_JAVA(
  _USER_JAVA_ID UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  _USER_JAVA_CREATED_AT DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  _USER_JAVA_UPDATED_AT DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  _USER_JAVA_TOTAL INT NOT NULL,
  _USER_JAVA_COMMENTS INT NOT NULL,
  _USER_JAVA_VARIABLES INT NOT NULL,
  _USER_JAVA_ARRAYS INT NOT NULL,
  _USER_JAVA_OBJECTS INT NOT NULL,
  _USER_JAVA_FUNCTIONS INT NOT NULL,
  _USER_ID UUID NOT NULL,
  CONSTRAINT fk_user
    FOREIGN KEY(_USER_ID)
	  REFERENCES _USER(_USER_ID),
);

--- --- ---

DROP TABLE IF EXISTS _USER_POINTS_PYTHON;

CREATE TABLE IF NOT EXISTS _USER_POINTS_PYTHON(
  _USER_PYTHON_ID UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  _USER_PYTHON_CREATED_AT DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  _USER_PYTHON_UPDATED_AT DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  _USER_PYTHON_TOTAL INT NOT NULL,
  _USER_PYTHON_COMMENTS INT NOT NULL,
  _USER_PYTHON_VARIABLES INT NOT NULL,
  _USER_PYTHON_ARRAYS INT NOT NULL,
  _USER_PYTHON_OBJECTS INT NOT NULL,
  _USER_PYTHON_FUNCTIONS INT NOT NULL,
  _USER_ID UUID NOT NULL,
  CONSTRAINT fk_user
    FOREIGN KEY(_USER_ID)
	  REFERENCES _USER(_USER_ID),
);

--- --- ---

DROP TABLE IF EXISTS _GUEST;

CREATE TABLE IF NOT EXISTS _GUEST(
  _ID UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  _CREATED_AT DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  _UPDATED_AT DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  _ACCESS_TOKEN VARCHAR(255) NOT NULL,
  _FIRST_LOGIN BOOLEAN NOT NULL DEFAULT false,
  _ADMIN BOOLEAN NOT NULL DEFAULT false,
  _SUBSCRIPTION VARCHAR(50) NOT NULL,
  _IP_ADDRESS VARCHAR(50) NOT NULL,
  _PASSCODE UUID NOT NULL DEFAULT gen_random_uuid(),
  _PASSCODE_CONFIRMED BOOLEAN NOT NULL DEFAULT false,
  _EMAIL VARCHAR(50) UNIQUE NOT NULL,
  _EMAIL_CONFIRMED BOOLEAN NOT NULL DEFAULT false,
  _EMAIL_PASSCODE UUID NOT NULL DEFAULT gen_random_uuid(),
  _PASSWORD VARCHAR(100) NOT NULL,
  _DEFAULT_LANGUAGE VARCHAR(30) NOT NULL,
  _DEFAULT_ROUTE VARCHAR(50) NOT NULL,
  _POINTS_TOTAL INT NOT NULL,
  _POINTS_JAVASCRIPT INT NOT NULL,
  _POINTS_JAVA INT NOT NULL,
  _POINTS_PYTHON INT NOT NULL,
  _COURSES VARCHAR(255) NOT NULL
);

--- --- ---

DROP TABLE IF EXISTS _STUDENT;

CREATE TABLE IF NOT EXISTS _STUDENT(
  _STUDENT_ID UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  _STUDENT_CREATED_AT DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  _STUDENT_UPDATED_AT DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  _STUDENT_PASSCODE UUID NOT NULL DEFAULT gen_random_uuid(),
  _STUDENT_PASSCODE_CONFIRMED BOOLEAN NOT NULL DEFAULT false,
  _STUDENT_ADMIN_STATUS BOOLEAN NOT NULL DEFAULT FALSE,
  _STUDENT_POINTS INT NOT NULL,
  _STUDENT_COURSES VARCHAR(255) NOT NULL,
  _USER_ID UUID NOT NULL,
  _USER_EMAIL VARCHAR(50) UNIQUE NOT NULL,
  _USER_COURSES VARCHAR(255),
  CONSTRAINT fk_user
    FOREIGN KEY(_USER_ID)
	  REFERENCES _USER(_USER_ID),
  CONSTRAINT fk_user_email
    FOREIGN KEY(_USER_EMAIL)
    REFERENCES _USER(_USER_EMAIL),
  CONSTRAINT fk_user_courses
    FOREIGN KEY(_USER_COURSES)
	  REFERENCES _USER(_USER_COURSES)
);

--- --- ---

DROP TABLE IF EXISTS _ADMIN;

CREATE TABLE IF NOT EXISTS _ADMIN(
  _ADMIN_ID UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  _ADMIN_CREATED_AT DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  _ADMIN_UPDATED_AT DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  _ADMIN_PASSCODE UUID NOT NULL DEFAULT gen_random_uuid(),
  _ADMIN_PASSCODE_CONFIRMED BOOLEAN NOT NULL DEFAULT false,
  _ADMIN_STATUS BOOLEAN NOT NULL DEFAULT TRUE,
  _ADMIN_POINTS INT NOT NULL,
  _ADMIN_COURSES VARCHAR(255) NOT NULL,
  _USER_ID UUID NOT NULL,
  _USER_EMAIL VARCHAR(50) UNIQUE NOT NULL,
  _USER_COURSES VARCHAR(255),
  CONSTRAINT fk_user
    FOREIGN KEY(_USER_ID)
	  REFERENCES _USER(_USER_ID),
  CONSTRAINT fk_user_email
    FOREIGN KEY(_USER_EMAIL),
    REFERENCES _USER(_USER_EMAIL)
  CONSTRAINT fk_user_courses
    FOREIGN KEY(_USER_COURSES)
	  REFERENCES _USER(_USER_COURSES)
);

--- --- ---

DROP TABLE IF EXISTS _SUBSCRIPTION;

CREATE TABLE IF NOT EXISTS _COURSE(
  _COURSE_ID UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  _COURSE_CREATED_AT DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  _COURSE_UPDATED_AT DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  _COURSE_PASSCODE UUID NOT NULL DEFAULT gen_random_uuid(),
  _COURSE_ADMIN_STATUS VARCHAR(255) NOT NULL,
  _COURSE_LANGUAGES VARCHAR(100) NOT NULL,
  _COURSE_SUBJECT VARCHAR(30) NOT NULL,
  _COURSE_QUESTION_IDS VARCHAR(255) NOT NULL,
  _COURSE_COMPLETE BOOLEAN NOT NULL,
  _COURSE_POINTS INT NOT NULL
);
