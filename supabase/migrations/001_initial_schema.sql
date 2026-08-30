-- SIH 26130: BuildX Prototype Initial Schema
-- Compact schema supporting the complete Maharashtra Hero Journey (APP-MH-2026-00124)

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Businesses
CREATE TABLE IF NOT EXISTS businesses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID,
    name TEXT NOT NULL,
    trade_name TEXT,
    entity_type TEXT NOT NULL DEFAULT 'Private Limited Company',
    cin TEXT,
    pan TEXT,
    gstin TEXT,
    sector TEXT NOT NULL,
    sub_sector TEXT NOT NULL,
    state TEXT NOT NULL DEFAULT 'Maharashtra',
    district TEXT NOT NULL,
    taluka TEXT,
    village_city TEXT,
    pincode TEXT,
    location_type TEXT NOT NULL DEFAULT 'MIDC',
    industrial_area TEXT,
    plot_number TEXT,
    project_type TEXT NOT NULL DEFAULT 'New Project',
    project_stage TEXT NOT NULL DEFAULT 'Proposed / Pre-Construction',
    total_investment_inr NUMERIC DEFAULT 150000000,
    proposed_employment INTEGER DEFAULT 45,
    built_up_area_sqft NUMERIC DEFAULT 45000,
    power_requirement_kw NUMERIC DEFAULT 750,
    water_requirement_kld NUMERIC DEFAULT 25,
    is_food_storage BOOLEAN DEFAULT TRUE,
    storage_type TEXT DEFAULT 'Cold / Refrigerated',
    storage_capacity_mt NUMERIC DEFAULT 5000,
    temperature_range TEXT DEFAULT '-25°C to +10°C',
    contact_name TEXT NOT NULL,
    contact_designation TEXT,
    contact_email TEXT NOT NULL,
    contact_phone TEXT NOT NULL,
    profile_completion_pct INTEGER DEFAULT 92,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Documents (Document Vault)
CREATE TABLE IF NOT EXISTS documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
    doc_code TEXT NOT NULL,
    doc_name TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'LEGAL',
    file_name TEXT NOT NULL,
    file_size_kb INTEGER DEFAULT 1024,
    file_url TEXT,
    verification_status TEXT NOT NULL DEFAULT 'VERIFIED',
    uploaded_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Applications
CREATE TABLE IF NOT EXISTS applications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    app_number TEXT UNIQUE NOT NULL,
    business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
    approval_code TEXT NOT NULL,
    approval_name TEXT NOT NULL,
    department TEXT NOT NULL,
    authority_name TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'DRAFT',
    sla_days INTEGER DEFAULT 30,
    sla_due_date TIMESTAMPTZ,
    form_data JSONB DEFAULT '{}'::jsonb,
    submitted_at TIMESTAMPTZ,
    decided_at TIMESTAMPTZ,
    decision_reason TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Application Documents
CREATE TABLE IF NOT EXISTS application_documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    application_id UUID REFERENCES applications(id) ON DELETE CASCADE,
    document_id UUID REFERENCES documents(id) ON DELETE SET NULL,
    doc_code TEXT NOT NULL,
    doc_name TEXT NOT NULL,
    is_mandatory BOOLEAN DEFAULT TRUE,
    status TEXT NOT NULL DEFAULT 'ATTACHED',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Application Events (Timeline Log)
CREATE TABLE IF NOT EXISTS application_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    application_id UUID REFERENCES applications(id) ON DELETE CASCADE,
    actor_role TEXT NOT NULL DEFAULT 'SYSTEM',
    actor_name TEXT,
    event_type TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Queries & Responses
CREATE TABLE IF NOT EXISTS queries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    application_id UUID REFERENCES applications(id) ON DELETE CASCADE,
    officer_name TEXT NOT NULL,
    title TEXT NOT NULL,
    query_text TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'OPEN',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS query_responses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    query_id UUID REFERENCES queries(id) ON DELETE CASCADE,
    response_text TEXT NOT NULL,
    document_id UUID REFERENCES documents(id) ON DELETE SET NULL,
    submitted_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Inspections
CREATE TABLE IF NOT EXISTS inspections (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    application_id UUID REFERENCES applications(id) ON DELETE CASCADE,
    officer_name TEXT NOT NULL,
    scheduled_date DATE NOT NULL,
    scheduled_time TEXT NOT NULL,
    location TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'SCHEDULED',
    outcome TEXT DEFAULT 'PENDING',
    remarks TEXT,
    completed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
