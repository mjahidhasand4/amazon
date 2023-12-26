CREATE TABLE USERS (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    country_code VARCHAR(6),
    email VARCHAR(255),
    mobile_phone_number VARCHAR(20),
    is_email_verified BOOLEAN DEFAULT FALSE,
    is_mobile_phone_number_verified BOOLEAN DEFAULT FALSE,
    otp_code VARCHAR(6),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE PRODUCTS (
    id SERIAL PRIMARY KEY NOT NULL,
    product_id NOT NULL,
    product_name NOT NULL,
    manufracture NOT NULL,
    intended_use NOT NULL,
    target_audience NOT NULL,
    other_attribute NOT NULL,
    subject_matter NOT NULL,
    search_terms NOT NULL,
    platinum_keywords NOT NULL
);