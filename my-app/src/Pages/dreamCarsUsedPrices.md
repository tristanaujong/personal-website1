# My Dream Cars: used-price research

Research snapshot: **November 14, 2026**. Display currency: **USD**, rounded to the nearest $100. `dreamCarsPricing.json` contains the unrounded means, source links, sample prices, counts, comparable definitions, periods, and limitations. `dreamCarsData.js` joins that research to all 64 supplied cars and sorts the displayed prices from low to high.

## Method

- Prefer U.S. used/dealer asking averages and exact-generation/trim samples. Asking prices are not completed transaction prices.
- Where a suitable listing mean is unavailable, use the publisher’s recorded-sale mean for the matching collector submarket. These can include international sales and historical periods; they are labeled as recorded sales, not current U.S. dealer averages.
- Sample means are arithmetic means of the documented prices. Do not mix MSRP, trade-in values, current auction bids, unsold estimates, or adjacent variants. Repeated result blocks are counted once. Known potential duplicate listings are excluded; high but otherwise comparable asks remain in the mean.
- A single observed sale is a **single-sale estimate**, not a representative average. Sample sizes and sale periods remain documented here and in the JSON. The page uses the uniform **Average Used Price** label without source links or sample captions. All prices carry ≈ because they are rounded and differ by mileage, condition, options, and history; the footer retains the general estimate disclosure.
- The research does not use a common rolling sale window or adjust historical prices for inflation. Publisher means, current asking samples, and sparse historical samples have different coverage. They are useful for an indicative ordering, not a uniform valuation index or a guaranteed purchase price.

## Important scope limits

- Silvia Q’s, Tourer V Chaser, M56 Sport, 2019 LC500 Inspiration, Diablo GTR, and Bacalar have one exact-comparable public sale in this research; they remain single-sale estimates in the research data.
- The Agera R uses two exact-R sales from **2019–2021**. The 2016 Agera RSR’s $3.38m result and the base Agera are excluded. This older sample cannot establish the current value of an Agera R.
- MC12 uses five USD-denominated public sales from **2006–2026**, including the May 2026 record. Two EUR results are excluded. Veyron Grand Sport uses two U.S. sales from **2017 and 2026**, excluding Vitesse/Super Sport/coupe results.
- Broader collector submarket proxies are documented for Evolution V (GSR/RS), second-generation WRX STi (market/facelift variants), Ram SRT-10 (cab variants), F-Type SVR (body variants), and the pictured bespoke C63/F12. Their exact package premiums cannot be isolated.
- The MX-5 Miata Club uses the published nationwide U.S. used asking average for the **2023 soft-top Club: $28,896**, displayed as **≈$28,900**. RF and other trims are excluded; no currency conversion is used. [Cars.com source](https://www.cars.com/shopping/mazda-mx_5_miata-2023-club/).
- The **1999 Japan-market S2000 AP1** uses two U.S. dealer asks, **$29,495 and $34,999**, averaging **$32,247**, displayed as **≈$32,200**. This small sample excludes AP2/CR, overseas inventory, and a sold listing with an unknown transaction price. [Texas JDM](https://texasjdm.com/products/new-vehicle-71), [JDM Supply](https://jdmsupply.com/sale/AZ6JJl/1999-honda-s2000).
- Diablo GTR: BINGO’s January 12, 2025 result is **JPY 122,100,000 including premium**, converted using the Bank of Japan’s January 10, 2025 central rate of **JPY 158.40/USD**. [Result PDF](https://bhauction.com/data/img/news/190526/2025.1.12_Results_SCA.pdf), [FX source](https://www.boj.or.jp/statistics/market/forex/fxdaily/fxlist/fx250110.pdf). The 2026 unsold car is excluded.
- GT350 Heritage uses two BaT hammer results and one duPont result including buyer premium; this fee difference is disclosed in the data. [BaT result 1](https://bringatrailer.com/listing/2020-ford-mustang-shelby-gt350-85/), [BaT result 2](https://bringatrailer.com/listing/2020-ford-mustang-shelby-gt350-86/), [duPont result](https://live.dupontregistry.com/auction/2020-ford-mustangshelbygt3508kmilesheritageedition-1814).
- Some dealer/search pages return a model-wide FAQ average on a trim-filtered page. The Integra Type S, Accord Touring, GR Corolla Circuit, and R8 Performance values were checked against actual trim listings or an independent trim-specific feed instead of copying those FAQ figures.

## Display order and sources

| # | Vehicle | Rounded used price | Basis | Coverage | Source |
| --- | --- | ---: | --- | --- | --- |
| 1 | Nissan Silvia Q’s | $11,300 | Single sale | U.S. sales · Nov 2024 | [Bring a Trailer](https://bringatrailer.com/listing/1990-nissan-silvia-3/) |
| 2 | Honda Accord Touring Coupe | $17,300 | 17 asks | U.S. listings | [CarGurus](https://www.cargurus.com/Cars/t-Used-Honda-Accord-Coupe-Touring-t59701) |
| 3 | Infiniti M56S | $17,800 | Single sale | U.S. sales · Mar 2025 | [Bring a Trailer](https://bringatrailer.com/listing/2011-infiniti-m-2/) |
| 4 | Toyota Chaser Tourer V Limited | $21,500 | Single sale | U.S. sales · Aug 2026 | [Bring a Trailer](https://bringatrailer.com/listing/1998-toyota-chaser/) |
| 5 | Hyundai Kona N | $23,300 | 4 asks | U.S. listings | [CARFAX](https://www.carfax.com/Used-Hyundai-Kona-N_w10162) |
| 6 | Nissan 350Z NISMO | $24,300 | Published sale mean | Global recorded sales | [CLASSIC.COM](https://www.classic.com/m/nissan/z-car/350z/nismo/?listing_status=forsale&page=1) |
| 7 | Dodge Challenger SRT8 | $24,600 | Published asking mean | U.S. dealer listings | [Visor](https://visor.vin/research/used-car-prices/dodge/challenger/srt8) |
| 8 | Audi RS 5 Coupe | $27,100 | 20 asks | U.S. listings · 2026 listings | [CARFAX](https://www.carfax.com/Research/Audi/RS5/2013) |
| 9 | Mazda MX-5 Miata Club | $28,900 | Published asking mean | U.S. listings · 2026 research snapshot | [Cars.com](https://www.cars.com/shopping/mazda-mx_5_miata-2023-club/) |
| 10 | Subaru Impreza WRX STi | $29,100 | Published sale mean | Global recorded sales | [CLASSIC.COM](https://www.classic.com/m/subaru/impreza/2nd-gen/wrx-sti/?page=1) |
| 11 | Honda S2000 | $32,200 | 2 asks | U.S. dealer listings · 2026 research snapshot | [Texas JDM / JDM Supply](https://texasjdm.com/products/new-vehicle-71) |
| 12 | Mitsubishi Lancer Evolution V GSR | $34,200 | Published sale mean | Global recorded sales | [CLASSIC.COM](https://www.classic.com/m/mitsubishi/lancer-evolution/evolution-v/?listing_status=forsale&page=1) |
| 13 | BMW M2 Coupe | $38,000 | Published sale mean | Global recorded sales | [CLASSIC.COM](https://www.classic.com/m/bmw/2-series/f22/m2/base-model?status=for_sale) |
| 14 | BMW M5 | $38,800 | Published sale mean | Global recorded sales | [CLASSIC.COM](https://www.classic.com/m/bmw/5-series/e39/m5?page=1) |
| 15 | Chevrolet SS | $40,300 | Published sale mean | Global recorded sales | [CLASSIC.COM](https://www.classic.com/m/chevrolet/ss/?page=1) |
| 16 | Range Rover Sport SVR | $40,400 | Published asking mean | U.S. dealer listings | [Autotrader](https://www.autotrader.com/cars-for-sale/land-rover/range-rover-sport/svr?searchRadius=0) |
| 17 | Toyota GR Corolla Circuit Edition | $40,400 | 24 asks | U.S. listings | [CarGurus](https://www.cargurus.com/Cars/t-Used-Toyota-GR-Corolla-Circuit-Edition-AWD-t105106) |
| 18 | Dodge Ram SRT-10 | $43,600 | Published sale mean | Global recorded sales | [CLASSIC.COM](https://www.classic.com/m/dodge/ram/3rd-gen/srt-10?listing_status=sold&page=1&pubDate=20251202) |
| 19 | Chevrolet Corvette Z06 | $47,900 | Published sale mean | Global recorded sales | [CLASSIC.COM](https://www.classic.com/m/chevrolet/corvette/c6/z06/base-model?listing_status=forsale&page=1&status=for_sale) |
| 20 | Lexus RC F | $48,100 | 6 asks | U.S. listings | [Edmunds](https://www.edmunds.com/used-lexus-rc-f-denver-co/) |
| 21 | Acura Integra Type S | $48,200 | Published asking mean | U.S. dealer listings | [Visor](https://visor.vin/research/used-car-prices/acura/integra/type-s) |
| 22 | Hyundai Ioniq 5 N | $48,200 | Published asking mean | U.S. listings | [CarGurus](https://www.cargurus.com/Cars/t-Used-Hyundai-IONIQ-5-N-AWD-t110594) |
| 23 | BMW M3 Competition Coupe | $54,100 | Published sale mean | Global recorded sales | [CLASSIC.COM](https://www.classic.com/m/bmw/3-series/e90/m3/zcp-coupe-manual/) |
| 24 | BMW M5 | $54,400 | Published sale mean | Global recorded sales | [CLASSIC.COM](https://www.classic.com/m/bmw/5-series/g30/m5/base-model?page=3&pubDate=20250425&status=for_sale) |
| 25 | Cadillac CT6-V | $54,700 | 5 asks | U.S. listings | [Edmunds](https://www.edmunds.com/used-cadillac-ct6-v-sedan/) |
| 26 | Jaguar F-Pace SVR | $55,800 | 5 asks | U.S. listings | [CARFAX](https://www.carfax.com/Used-Jaguar-F-Pace-SVR_t14410) |
| 27 | Ford Mustang Shelby GT500 | $59,500 | Published asking mean | U.S. listings | [Cars.com](https://www.cars.com/shopping/ford-shelby_gt500-2013/) |
| 28 | Jaguar F-Type SVR Coupe | $63,800 | Published sale mean | Global recorded sales | [CLASSIC.COM](https://www.classic.com/m/jaguar/f-type/1st-gen/svr?status=for_sale) |
| 29 | Lexus IS 500 F Sport Performance | $65,700 | 5 asks | U.S. listings · 2026 listings | [Edmunds](https://www.edmunds.com/used-lexus-is-500-new-york-ny/) |
| 30 | Chevrolet Corvette Z06 | $77,400 | Published sale mean | Global recorded sales | [CLASSIC.COM](https://www.classic.com/m/chevrolet/corvette/c7/z06/base-model?page=1&status=for_sale) |
| 31 | Ford Mustang Shelby GT350 Heritage | $79,000 | 3 sales | U.S. sales | [Bring a Trailer / duPont REGISTRY](https://bringatrailer.com/listing/2020-ford-mustang-shelby-gt350-85/) |
| 32 | Lotus Emira V6 First Edition | $87,200 | Published sale mean | Global recorded sales | [CLASSIC.COM](https://www.classic.com/m/lotus/emira/first-edition/v6/?page=5) |
| 33 | Mercedes-AMG GLS 63 | $87,400 | 6 asks | U.S. listings · 2026 listings | [TrueCar](https://www.truecar.com/used-cars-for-sale/listings/mercedes-benz/gls/location-new-york-ny/?bodyStyleSlug=suv&trim=amg-gls-63) |
| 34 | Lexus LC 500 Inspiration Series | $88,000 | Single sale | U.S. sales · Oct 2025 | [CLASSIC.COM](https://www.classic.com/a/barrett-jackson-scottsdale-fall-2025-kpd6xBn/lots/2019-lexus-lc500-inspiration-series-Wj1GjJn) |
| 35 | Jeep Grand Cherokee Trackhawk | $89,200 | Published sale mean | Global recorded sales | [CLASSIC.COM](https://www.classic.com/m/jeep/grand-cherokee/wk2/trackhawk/?page=1) |
| 36 | Lamborghini Gallardo | $101,800 | Published sale mean | Global recorded sales | [CLASSIC.COM](https://www.classic.com/m/lamborghini/gallardo/base-model/?listing_status=forsale) |
| 37 | Audi R8 V10 | $110,700 | Published sale mean | Global recorded sales | [CLASSIC.COM](https://www.classic.com/m/audi/r8/type-42/v10/?page=1) |
| 38 | Porsche 718 Cayman GT4 | $120,200 | Published sale mean | Global recorded sales | [CLASSIC.COM](https://www.classic.com/m/porsche/718/cayman/gt4/manual/?page=1) |
| 39 | Mercedes-Benz C 63 AMG Black Series | $135,400 | Published sale mean | Global recorded sales | [CLASSIC.COM](https://www.classic.com/m/mercedes-benz/c/w204/coupe/c-63-amg-black-series/?page=1) |
| 40 | Cadillac Escalade-V | $138,800 | Published asking mean | U.S. dealer listings | [Visor](https://visor.vin/research/used-car-prices/cadillac/escalade/v-series) |
| 41 | Chevrolet Corvette ZR1 | $138,900 | 6 asks | U.S. listings · Nov 2026 listings | [CLASSIC.COM](https://www.classic.com/m/chevrolet/corvette/c6/zr-1/) |
| 42 | Toyota Supra Turbo | $151,300 | 4 asks | U.S. listings · 2026 listings | [CLASSIC.COM](https://www.classic.com/m/toyota/supra/4th-gen/) |
| 43 | Ferrari Testarossa | $167,600 | Published sale mean | Global recorded sales | [CLASSIC.COM](https://www.classic.com/m/ferrari/testarossa?page=1) |
| 44 | Audi R8 V10 Performance | $220,000 | 21 asks | U.S. listings | [CarGurus](https://www.cargurus.com/Cars/l-Used-2020-Audi-R8-quattro-V10-Performance-Coupe-AWD-t84795) |
| 45 | Aston Martin DBS Superleggera | $239,300 | 5 asks | U.S. listings | [CLASSIC.COM](https://www.classic.com/m/aston-martin/dbs/3rd-gen/) |
| 46 | Ferrari F12berlinetta | $248,900 | Published sale mean | Global recorded sales | [CLASSIC.COM](https://www.classic.com/m/ferrari/f12/berlinetta?status=for_sale) |
| 47 | Dodge Viper ACR | $282,600 | Published sale mean | Global recorded sales | [CLASSIC.COM](https://www.classic.com/m/dodge/viper/5th-gen/acr?listing_status=forsale&status=for_sale) |
| 48 | Porsche 911 GT3 Touring | $320,200 | 5 asks | U.S. listings | [CLASSIC.COM](https://www.classic.com/m/porsche/911/992/9921/gt3/touring-manual/) |
| 49 | McLaren 675LT | $394,900 | 2 asks | U.S. listings | [CLASSIC.COM](https://www.classic.com/m/mclaren/675lt/base/) |
| 50 | Ford GT | $452,300 | Published sale mean | Global recorded sales | [CLASSIC.COM](https://www.classic.com/m/ford/gt/1st-gen/base-model/?page=1) |
| 51 | Lamborghini Aventador S | $510,700 | 11 asks | U.S. listings · Nov 2026 listings | [DriveIndex](https://driveindex.com/cars/lamborghini/aventador-s-coupe/for-sale) |
| 52 | Mercedes-Benz SLS AMG Black Series | $719,500 | Published sale mean | Global recorded sales | [CLASSIC.COM](https://www.classic.com/m/mercedes-benz/sls/black-series/?page=1) |
| 53 | Lamborghini Diablo GTR | $770,800 | Single sale | Japan sales, converted to USD · Jan 2025 | [BINGO / BH Auction](https://bhauction.com/data/img/news/190526/2025.1.12_Results_SCA.pdf) |
| 54 | Lexus LFA | $822,800 | Published sale mean | Global recorded sales | [CLASSIC.COM](https://www.classic.com/m/lexus/lfa/base-model/?page=1&pubDate=20250628) |
| 55 | Bentley Mulliner Bacalar | $876,900 | Single sale | Global sales · Dec 2025 | [CLASSIC.COM](https://www.classic.com/m/bentley/bacalar/) |
| 56 | Nissan Skyline GT-R NISMO 400R | $887,800 | 2 sales | U.S. sales | [CLASSIC.COM](https://www.classic.com/m/nissan/skyline/r33/gt-r/nismo-400r/) |
| 57 | Lamborghini Murciélago LP 670-4 SV | $1,023,400 | Published sale mean | Global recorded sales | [CLASSIC.COM](https://www.classic.com/m/lamborghini/murcielago/lp670-4-sv?status=for_sale) |
| 58 | Koenigsegg Agera R | $1,181,600 | 2 sales | Global sales · 2019–2021 | [Shifty / RM Sotheby’s](https://driveshifty.com/cars/koenigsegg/agera) |
| 59 | Ferrari 458 Speciale | $1,371,000 | 7 asks | U.S. listings | [CLASSIC.COM](https://www.classic.com/m/ferrari/458/speciale/) |
| 60 | McLaren P1 | $1,704,600 | Published sale mean | Global recorded sales | [CLASSIC.COM](https://www.classic.com/m/mclaren/p1/) |
| 61 | Ferrari 599 GTO | $2,166,300 | 3 asks | U.S. listings | [CLASSIC.COM](https://www.classic.com/m/ferrari/599/gto/) |
| 62 | Bugatti Veyron Grand Sport | $2,697,500 | 2 sales | U.S. sales · 2017 & 2026 | [Shifty](https://driveshifty.com/cars/bugatti/veyron/sold) |
| 63 | Maserati MC12 | $3,157,000 | 5 sales | USD-denominated sales · 2006–2026 | [DriveIndex](https://driveindex.com/cars/maserati/mc12/auction-results) |
| 64 | Ferrari LaFerrari | $4,295,800 | Published sale mean | Global recorded sales | [CLASSIC.COM](https://www.classic.com/m/ferrari/laferrari/coupe?status=for_sale) |

Detailed per-car exclusions and raw sample arrays are in `dreamCarsPricing.json`. Snapshot values are fixed research data; the page does not fetch live prices.
