import pricingResearch from "./dreamCarsPricing.json";
import { dreamCarCaptions } from "./dreamCarsCaptions";

const images = import.meta.glob(
  "../components/images/dream-cars/*.png",
  { eager: true, query: "?url", import: "default" },
);

// Used-price research and its source/sample metadata are kept separately so
// every displayed value can be reviewed and updated without changing car specs.
// Original MSRP remains reference metadata; the timeline uses used prices only.
// Model years identify the specification represented by each supplied cutout.
// References for the historical prices/specifications are in dreamCarsSources.md.
const car = (id, year, name, filename, originalMsrp, engine, horsepower, torque, drivetrain, note = "", originalMsrpEstimated = false) => ({
  id,
  year,
  name,
  image: images[`../components/images/dream-cars/${filename}.png`],
  originalMsrp,
  originalMsrpEstimated,
  usedPrice: Math.round(pricingResearch.cars[id].amount / 100) * 100,
  pricing: pricingResearch.cars[id],
  engine: engine
    .replace(/\bnaturally aspirated\b/gi, "NA")
    .replace(/\btwin[- ]turbo(?:charged)?\b/gi, "TT")
    .replace(/\bturbo(?:charged)?\b/gi, "Turbo"),
  horsepower,
  torque,
  drivetrain,
  note,
  caption: dreamCarCaptions[id],
});

export const dreamCars = [
  car("silvia-qs", 1988, "Nissan Silvia Q’s", "nissan_silvia_q_s_449-removebg-preview", 13300, "1.8L naturally aspirated inline-four", 133, 117, "RWD", "Japan-market model", true),
  car("evolution-v", 1998, "Mitsubishi Lancer Evolution V GSR", "mitsubishi_lancer_gsr_evolution_v_61-removebg-preview", 24800, "2.0L turbocharged inline-four", 276, 275, "AWD", "Japan-market GSR specification", true),
  car("chaser", 2000, "Toyota Chaser Tourer V Limited", "toyota_chaser_2.5_tourer_v_limited-removebg-preview", 30600, "2.5L turbocharged inline-six", 276, 278, "RWD", "Japan-market Tourer V Limited", true),
  car("wrx-sti", 2004, "Subaru Impreza WRX STi", "subaru_impreza_wrx_sti_84-removebg-preview", 30995, "2.5L turbocharged flat-four", 300, 300, "AWD"),
  car("kona-n", 2022, "Hyundai Kona N", "hyundai_kona_n_31-removebg-preview", 34200, "2.0L turbocharged inline-four", 276, 289, "FWD"),
  car("accord", 2016, "Honda Accord Touring Coupe", "honda_accord_touring_coupe_18-removebg-preview", 34225, "3.5L naturally aspirated V6", 278, 252, "FWD"),
  car("s2000", 1999, "Honda S2000", "honda_s2000_92-removebg-preview", null, "2.0L naturally aspirated VTEC inline-four", 247, 161, "RWD", "Japan-market AP1 specification"),
  car("challenger", 2008, "Dodge Challenger SRT8", "dodge_challenger_srt8_2-removebg-preview", 37320, "6.1L naturally aspirated HEMI V8", 425, 420, "RWD"),
  car("350z-nismo", 2007, "Nissan 350Z NISMO", "nissan_350z_nismo_25-removebg-preview", 38070, "3.5L naturally aspirated V6", 306, 268, "RWD"),
  car("supra", 1993, "Toyota Supra Turbo", "toyota_supra_14-removebg-preview", 39900, "3.0L twin-turbocharged inline-six", 320, 315, "RWD"),
  car("mx5", 2023, "Mazda MX-5 Miata Club", "mazda_mx-5_roadster_2.0_homura_141__2_-removebg-preview", 31550, "2.0L naturally aspirated inline-four", 181, 151, "RWD"),
  car("gr-corolla", 2023, "Toyota GR Corolla Circuit Edition", "toyota_gr_corolla_circuit_edition_11-removebg-preview", 42900, "1.6L turbocharged inline-three", 300, 273, "AWD"),
  car("ss", 2014, "Chevrolet SS", "chevrolet_ss_82-removebg-preview", 43920, "6.2L naturally aspirated V8", 415, 415, "RWD"),
  car("ram-srt10", 2004, "Dodge Ram SRT-10", "dodge_ram_srt-10_13-removebg-preview", 45000, "8.3L naturally aspirated V10", 500, 525, "RWD", "Regular-cab specification", true),
  car("gt500", 2013, "Ford Mustang Shelby GT500", "shelby_gt500_svt_32-removebg-preview", 54800, "5.8L supercharged V8", 662, 631, "RWD"),
  car("integra", 2024, "Acura Integra Type S", "acura_integra_type_s_181-removebg-preview (1)", 50800, "2.0L turbocharged VTEC inline-four", 320, 310, "FWD"),
  car("m2", 2016, "BMW M2 Coupe", "bmw_m2_coupe_418-removebg-preview", 51700, "3.0L turbocharged inline-six", 365, 343, "RWD", "369 lb-ft with overboost"),
  car("is500", 2022, "Lexus IS 500 F Sport Performance", "lexus_is_500_f_sport_performance_63__6_-removebg-preview", 56500, "5.0L naturally aspirated V8", 472, 395, "RWD"),
  car("m56s", 2011, "Infiniti M56S", "infiniti_m56s_1__1_-removebg-preview", 61200, "5.6L naturally aspirated V8", 420, 417, "RWD", "Sport Package", true),
  car("m3", 2011, "BMW M3 Competition Coupe", "bmw_m3_coupe_competition_package_5-removebg-preview", 61400, "4.0L naturally aspirated V8", 414, 295, "RWD", "Includes the Competition Package"),
  car("gt350", 2020, "Ford Mustang Shelby GT350 Heritage", "shelby_gt350_heritage_edition_6-removebg-preview", 62180, "5.2L naturally aspirated flat-plane V8", 526, 429, "RWD", "Includes the Heritage Edition Package"),
  car("z06-c6", 2006, "Chevrolet Corvette Z06", "chevrolet_corvette_z06_64-removebg-preview", 65000, "7.0L naturally aspirated LS7 V8", 505, 470, "RWD", "C6 generation"),
  car("ioniq5n", 2025, "Hyundai Ioniq 5 N", "hyundai_ioniq_5_n__2_-removebg-preview", 66100, "Dual electric motors", 641, 568, "AWD", "N Grin Boost output · 601 HP / 545 lb-ft in normal operation"),
  car("rcf", 2020, "Lexus RC F", "lexus_rc_f_87-removebg-preview", 64400, "5.0L naturally aspirated V8", 472, 395, "RWD"),
  car("rs5", 2013, "Audi RS 5 Coupe", "audi_rs_5_coupe_99-removebg-preview", 68700, "4.2L naturally aspirated V8", 450, 317, "AWD"),
  car("m5-e39", 2000, "BMW M5", "bmw_m5_409-removebg-preview (1)", 69400, "4.9L naturally aspirated V8", 394, 369, "RWD", "E39 generation"),
  car("z06-c7", 2015, "Chevrolet Corvette Z06", "corvette_stingray_z06_11-removebg-preview", 78000, "6.2L supercharged LT4 V8", 650, 650, "RWD", "C7 generation"),
  car("fpace", 2019, "Jaguar F-Pace SVR", "jaguar_f-pace_svr_785-removebg-preview", 79990, "5.0L supercharged V8", 550, 502, "AWD"),
  car("trackhawk", 2018, "Jeep Grand Cherokee Trackhawk", "jeep_grand_cherokee_trackhawk_36__1_-removebg-preview", 85900, "6.2L supercharged HEMI V8", 707, 645, "AWD"),
  car("ct6v", 2019, "Cadillac CT6-V", "cadillac_ct6-v-removebg-preview", 88790, "4.2L twin-turbocharged Blackwing V8", 550, 640, "AWD", "Blackwing V8"),
  car("testarossa", 1986, "Ferrari Testarossa", "ferrari_testarossa618-removebg-preview", 94000, "4.9L naturally aspirated flat-12", 380, 354, "RWD", "US-market specification", true),
  car("cayman-gt4", 2020, "Porsche 718 Cayman GT4", "porsche_718_cayman_gt4_54-removebg-preview", 99500, "4.0L naturally aspirated flat-six", 414, 309, "RWD"),
  car("lc500", 2019, "Lexus LC 500 Inspiration Series", "lexus_lc_500_inspiration_series_58__1_-removebg-preview", 106210, "5.0L naturally aspirated V8", 471, 398, "RWD", "Flare Yellow Inspiration Series"),
  car("zr1", 2009, "Chevrolet Corvette ZR1", "chevrolet_corvette_zr1_84__1_-removebg-preview", 103300, "6.2L supercharged LS9 V8", 638, 604, "RWD"),
  car("m5-f90", 2021, "BMW M5", "bmw_m5_6001-removebg-preview", 103500, "4.4L twin-turbocharged V8", 600, 553, "AWD", "F90 generation"),
  car("c63-black", 2012, "Mercedes-Benz C 63 AMG Black Series", "mercedes-benz_c_63_amg_black_series_performance_studio_edition_1-removebg-preview", 105000, "6.2L naturally aspirated V8", 510, 457, "RWD", "Pictured in Performance Studio Edition trim"),
  car("emira", 2024, "Lotus Emira V6 First Edition", "lotus_emira_first_edition_76-removebg-preview", 105400, "3.5L supercharged V6", 400, 310, "RWD", "Six-speed manual specification"),
  car("viper-acr", 2016, "Dodge Viper ACR", "dodge_viper_acr_26-removebg-preview", 117895, "8.4L naturally aspirated V10", 645, 600, "RWD", "Pictured with Extreme Aero Package"),
  car("range-svr", 2018, "Range Rover Sport SVR", "range_rover_sport_svr_5274-removebg-preview", 113600, "5.0L supercharged V8", 575, 516, "AWD"),
  car("nismo400r", 1996, "Nissan Skyline GT-R NISMO 400R", "nismo_400r_98-removebg-preview", 110000, "2.8L twin-turbocharged inline-six", 395, 347, "AWD", "NISMO 400R specification", true),
  car("ftype", 2017, "Jaguar F-Type SVR Coupe", "jaguar_f-type_svr_coupe_9-removebg-preview", 125950, "5.0L supercharged V8", 575, 516, "AWD"),
  car("gls63", 2021, "Mercedes-AMG GLS 63", "mercedes-amg_gls_63_4matic_8108-removebg-preview", 132100, "4.0L twin-turbocharged V8 + mild hybrid", 603, 627, "AWD", "Combustion engine output; EQ Boost adds temporary assistance"),
  car("escaladev", 2023, "Cadillac Escalade-V", "cadillac_escalade-v_83__2_-removebg-preview", 149195, "6.2L supercharged V8", 682, 653, "AWD"),
  car("fordgt", 2006, "Ford GT", "ford_gt_tungsten_91-removebg-preview", 149995, "5.4L supercharged V8", 550, 500, "RWD"),
  car("r8-v10", 2014, "Audi R8 V10", "audi_r8_v10_3-removebg-preview", 151200, "5.2L naturally aspirated V10", 525, 391, "AWD", "First generation · six-speed manual specification"),
  car("gt3-touring", 2022, "Porsche 911 GT3 Touring", "porsche_911_gt3_touring_mt_25-removebg-preview", 161100, "4.0L naturally aspirated flat-six", 502, 346, "RWD"),
  car("gallardo", 2004, "Lamborghini Gallardo", "lamborghini_gallardo-removebg-preview", 165900, "5.0L naturally aspirated V10", 493, 376, "AWD"),
  car("r8-performance", 2020, "Audi R8 V10 Performance", "audi_r8_v10_performance_39__1_-removebg-preview", 195900, "5.2L naturally aspirated V10", 602, 413, "AWD"),
  car("sls-black", 2014, "Mercedes-Benz SLS AMG Black Series", "mercedes-benz_sls_63_amg_black_series_95-removebg-preview", 275000, "6.2L naturally aspirated V8", 622, 468, "RWD"),
  car("458-speciale", 2014, "Ferrari 458 Speciale", "ferrari_458_speciale9-removebg-preview", 288000, "4.5L naturally aspirated V8", 597, 398, "RWD"),
  car("dbs", 2019, "Aston Martin DBS Superleggera", "aston_martin_dbs_superleggera_92__2_-removebg-preview", 304995, "5.2L twin-turbocharged V12", 715, 664, "RWD"),
  car("diablo-gtr", 2000, "Lamborghini Diablo GTR", "lamborghini_diablo_gt-r_20-removebg-preview", 310000, "6.0L naturally aspirated V12", 582, 472, "RWD", "Track-only model", true),
  car("f12", 2013, "Ferrari F12berlinetta", "ferrari_f12berlinetta_the_barchetta_88-removebg-preview", 315888, "6.3L naturally aspirated V12", 731, 509, "RWD", "Pictured with bespoke detailing"),
  car("675lt", 2016, "McLaren 675LT", "mclaren_675lt_582__2_-removebg-preview", 349500, "3.8L twin-turbocharged V8", 666, 516, "RWD"),
  car("lfa", 2012, "Lexus LFA", "lexus_lfa_13-removebg-preview", 375000, "4.8L naturally aspirated V10", 552, 354, "RWD"),
  car("599gto", 2011, "Ferrari 599 GTO", "ferrari_599_gto-removebg-preview", 410000, "6.0L naturally aspirated V12", 661, 457, "RWD", "", true),
  car("aventador-s", 2017, "Lamborghini Aventador S", "lamborghini_aventador_s_483-removebg-preview", 421350, "6.5L naturally aspirated V12", 730, 509, "AWD", ""),
  car("murcielago-sv", 2010, "Lamborghini Murciélago LP 670-4 SV", "lamborghini_murcielago_lp_670-4_superveloce_1__2_-removebg-preview", 450000, "6.5L naturally aspirated V12", 661, 487, "AWD", "", true),
  car("mc12", 2005, "Maserati MC12", "maserati_mc12_19__1_-removebg-preview", 799000, "6.0L naturally aspirated V12", 620, 481, "RWD", "", true),
  car("p1", 2014, "McLaren P1", "mclaren_p1_56__1_-removebg-preview", 1150000, "3.8L twin-turbo V8 + electric motor", 903, 664, "RWD", "Combined hybrid system output"),
  car("laferrari", 2014, "Ferrari LaFerrari", "laferrari_200__1_-removebg-preview", 1400000, "6.3L naturally aspirated V12 + HY-KERS", 949, 664, "RWD", "Combined hybrid system output", true),
  car("agera-r", 2011, "Koenigsegg Agera R", "koenigsegg_agera_r_11-removebg-preview", 1600000, "5.0L twin-turbocharged V8", 1115, 885, "RWD", "E85 specification", true),
  car("bacalar", 2021, "Bentley Mulliner Bacalar", "bentley_mulliner_bacalar_584-removebg-preview", 1900000, "6.0L twin-turbocharged W12", 650, 667, "AWD", "Coachbuilt model", true),
  car("veyron", 2010, "Bugatti Veyron Grand Sport", "bugatti_veyron_grand_sport_roadster_us-spec_8-removebg-preview", 2000000, "8.0L quad-turbocharged W16", 1001, 922, "AWD", "", true),
].sort((a, b) => a.usedPrice - b.usedPrice ||
  a.pricing.amount - b.pricing.amount || a.name.localeCompare(b.name));

export const usedPriceResearchDate = "Nov 14, 2026";

export const formatPrice = (value) => new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
}).format(value);
