--
-- PostgreSQL database dump
--

-- Dumped from database version 13.7 (Debian 13.7-0+deb11u1)
-- Dumped by pg_dump version 13.7 (Debian 13.7-0+deb11u1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: typeorm_metadata; Type: TABLE; Schema: public; Owner: apiuser
--

CREATE TABLE public.typeorm_metadata (
    type character varying NOT NULL,
    database character varying,
    schema character varying,
    "table" character varying,
    name character varying,
    value text
);


ALTER TABLE public.typeorm_metadata OWNER TO apiuser;

--
-- Name: user; Type: TABLE; Schema: public; Owner: apiuser
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    email character varying NOT NULL,
    passwd character varying NOT NULL,
    vehicle integer DEFAULT '-1'::integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updateAd" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public."user" OWNER TO apiuser;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: apiuser
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO apiuser;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: apiuser
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: vehicle; Type: TABLE; Schema: public; Owner: apiuser
--

CREATE TABLE public.vehicle (
    id integer NOT NULL,
    plate character varying NOT NULL,
    model character varying NOT NULL,
    rent boolean DEFAULT false NOT NULL,
    daily_price integer DEFAULT 10 NOT NULL,
    init_date timestamp without time zone,
    finishe_date timestamp without time zone,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updateAd" timestamp without time zone DEFAULT now() NOT NULL,
    id_user integer
);


ALTER TABLE public.vehicle OWNER TO apiuser;

--
-- Name: vehicle_id_seq; Type: SEQUENCE; Schema: public; Owner: apiuser
--

CREATE SEQUENCE public.vehicle_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.vehicle_id_seq OWNER TO apiuser;

--
-- Name: vehicle_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: apiuser
--

ALTER SEQUENCE public.vehicle_id_seq OWNED BY public.vehicle.id;


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: apiuser
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Name: vehicle id; Type: DEFAULT; Schema: public; Owner: apiuser
--

ALTER TABLE ONLY public.vehicle ALTER COLUMN id SET DEFAULT nextval('public.vehicle_id_seq'::regclass);


--
-- Data for Name: typeorm_metadata; Type: TABLE DATA; Schema: public; Owner: apiuser
--



--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: apiuser
--

INSERT INTO public."user" VALUES (7, 'felipe2tec@gmail.com', 'passwoard', -1, '2022-05-15 19:42:27.226029', '2022-05-16 09:35:32.97457');


--
-- Data for Name: vehicle; Type: TABLE DATA; Schema: public; Owner: apiuser
--

INSERT INTO public.vehicle VALUES (9, '1111111', 'Opala', false, 10, NULL, NULL, '2022-05-16 09:41:40.023729', '2022-05-16 09:41:40.023729', NULL);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: apiuser
--

SELECT pg_catalog.setval('public.user_id_seq', 8, true);


--
-- Name: vehicle_id_seq; Type: SEQUENCE SET; Schema: public; Owner: apiuser
--

SELECT pg_catalog.setval('public.vehicle_id_seq', 9, true);


--
-- Name: vehicle PK_187fa17ba39d367e5604b3d1ec9; Type: CONSTRAINT; Schema: public; Owner: apiuser
--

ALTER TABLE ONLY public.vehicle
    ADD CONSTRAINT "PK_187fa17ba39d367e5604b3d1ec9" PRIMARY KEY (id);


--
-- Name: user PK_cace4a159ff9f2512dd42373760; Type: CONSTRAINT; Schema: public; Owner: apiuser
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);


--
-- Name: vehicle UQ_51922d0c6647cb10de3f76ba4e3; Type: CONSTRAINT; Schema: public; Owner: apiuser
--

ALTER TABLE ONLY public.vehicle
    ADD CONSTRAINT "UQ_51922d0c6647cb10de3f76ba4e3" UNIQUE (plate);


--
-- Name: user UQ_e12875dfb3b1d92d7d7c5377e22; Type: CONSTRAINT; Schema: public; Owner: apiuser
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE (email);


--
-- PostgreSQL database dump complete
--

