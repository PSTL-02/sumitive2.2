//  jshint esversion:6
mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA';
$(document).ready(function () {

    const properties = [{
            id: 1,
            name: "Te Papa Comfort Inn",
            location: "Museum of New Zealand Te Papa",
            longitude: 174.7820,
            latitude: -41.2904,
            building: "Hotel ",
            People: "1-2",
            price: 157,
            minStay: 1,
            maxStay: 5,
            bedrooms: 2,
            bathrooms: 2,
            image: "../img/hotel1.jpg",
            description: "A cozy hotel with modern amenities, just a stone's throw from Te Papa Museum."
        },
        {
            id: 2,
            name: "Te Papa Backpackers",
            location: "Museum of New Zealand Te Papa",
            longitude: 174.7820,
            latitude: -41.2904,
            building: "Hostel ",
            People: "1",
            price: 30,
            minStay: 1,
            maxStay: 10,
            bedrooms: 1,
            bathrooms: 1,
            image: "../img/hostel1.jpg",
            description: "Affordable and comfortable hostel, perfect for solo travelers exploring the museum."
        },
        {
            id: 3,
            name: "Te Papa Lodge",
            location: "Museum of New Zealand Te Papa",
            longitude: 174.7820,
            latitude: -41.2904,
            building: "Motel ",
            People: "2-4",
            price: 90,
            minStay: 3,
            maxStay: 10,
            bedrooms: 2,
            bathrooms: 3,
            image: "../img/zachary-kyra-derksen-ajqDp29Pz7M-unsplash.jpg",
            description: "Spacious motel ideal for families or small groups, close to Te Papa Museum."
        },
        {
            id: 4,
            name: "Te Papa Villa",
            location: "Museum of New Zealand Te Papa",
            longitude: 174.7820,
            latitude: -41.2904,
            building: "House ",
            People: "1-4",
            price: 240,
            minStay: 2,
            maxStay: 15,
            bedrooms: 3,
            bathrooms: 2,
            image: "../img/house1.jpg",
            description: "Luxurious house offering all the comforts of home, minutes from Te Papa Museum."
        },
        // Hobbiton™ Movie Set Tours
        {
            id: 5,
            name: "Shire Inn",
            location: "Hobbiton™ Movie Set Tours",
            longitude: 175.6820,
            latitude: -37.8665,
            building: "Hotel",
            People: "1-2 ",
            price: 157,
            minStay: 1,
            maxStay: 5,
            bedrooms: 2,
            bathrooms: 2,
            image: "../img/zane-lee-YRGyq_T6NGU-unsplash.jpg",
            description: "Charming hotel inspired by the Shire, offering a unique stay near Hobbiton."
        },
        {
            id: 6,
            name: "Baggins' Hostel",
            location: "Hobbiton™ Movie Set Tours",
            longitude: 175.6820,
            latitude: -37.8665,
            building: "Hostel",
            People: "1",
            price: 30,
            minStay: 1,
            maxStay: 10,
            bedrooms: 1,
            bathrooms: 1,
            image: "../img/avi-werde-hHz4yrvxwlA-unsplash.jpg",
            description: "Budget-friendly hostel with a hobbit-themed ambiance, perfect for solo adventurers."
        },
        {
            id: 7,
            name: "Hobbiton Hideaway",
            location: "Hobbiton™ Movie Set Tours",
            longitude: 175.6820,
            latitude: -37.8665,
            building: "Motel ",
            People: "2-4",
            price: 90,
            minStay: 3,
            maxStay: 10,
            bedrooms: 2,
            bathrooms: 3,
            image: "../img/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg",
            description: "Comfortable motel offering a taste of Middle-earth, close to Hobbiton."
        },
        {
            id: 8,
            name: "Middle-earth Manor",
            location: "Hobbiton™ Movie Set Tours",
            longitude: 175.6820,
            latitude: -37.8665,
            building: "House ",
            People: "1-4 ",
            price: 240,
            minStay: 2,
            maxStay: 15,
            bedrooms: 3,
            bathrooms: 2,
            image: "../img/bailey-anselme-Bkp3gLygyeA-unsplash.jpg",
            description: "Spacious house with hobbit-themed decor, perfect for families visiting Hobbiton."
        },
        // Sky Tower
        {
            id: 9,
            name: "Sky Tower Suites",
            location: "Sky Tower",
            longitude: 174.7633,
            latitude: -36.8485,
            building: "Hotel ",
            People: "1-2",
            price: 157,
            minStay: 1,
            maxStay: 5,
            bedrooms: 2,
            bathrooms: 2,
            image: "../img/dillon-kydd-XGvwt544g8k-unsplash.jpg",
            description: "Elegant hotel offering stunning views of Sky Tower and the city skyline."
        },
        {
            id: 10,
            name: "Sky High Hostel",
            location: "Sky Tower",
            longitude: 174.7633,
            latitude: -36.8485,
            building: "Hostel",
            People: "1",
            price: 30,
            minStay: 1,
            maxStay: 10,
            bedrooms: 1,
            bathrooms: 1,
            image: "../img/frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg",
            description: "Convenient and affordable hostel with easy access to Sky Tower attractions."
        },
        {
            id: 11,
            name: "Skyline Motel",
            location: "Sky Tower",
            longitude: 174.7633,
            latitude: -36.8485,
            building: "Motel ",
            People: "2-4",
            price: 90,
            minStay: 3,
            maxStay: 10,
            bedrooms: 2,
            bathrooms: 3,
            image: "../img/frames-for-your-heart-mR1CIDduGLc-unsplash.jpg",
            description: "Modern motel located in the heart of the city, offering great views of Sky Tower."
        },
        {
            id: 12,
            name: "Sky Tower Residence",
            location: "Sky Tower",
            longitude: 174.7633,
            latitude: -36.8485,
            building: "House ",
            People: "1-4",
            price: 240,
            minStay: 2,
            maxStay: 15,
            bedrooms: 3,
            bathrooms: 2,
            image: "../img/greg-rivers-rChFUMwAe7E-unsplash.jpg",
            description: "Luxurious residence with all amenities, perfect for a comfortable stay near Sky Tower."
        },
        // Waiotapu Thermal Wonderland
        {
            id: 13,
            name: "Waiotapu Retreat",
            location: "Waiotapu Thermal Wonderland",
            longitude: 176.3782,
            latitude: -38.3501,
            building: "Hotel ",
            People: "1-2",
            price: 157,
            minStay: 1,
            maxStay: 5,
            bedrooms: 2,
            bathrooms: 2,
            image: "../img/ian-keefe-OgcJIKRnRC8-unsplash.jpg",
            description: "Relaxing hotel offering easy access to the stunning Waiotapu Thermal Wonderland."
        },
        {
            id: 14,
            name: "Thermal Hostel",
            location: "Waiotapu Thermal Wonderland",
            longitude: 176.3782,
            latitude: -38.3501,
            building: "Hostel",
            People: "1",
            price: 30,
            minStay: 1,
            maxStay: 10,
            bedrooms: 1,
            bathrooms: 1,
            image: "../img/lotus-design-n-print-L6-yKzsrJzE-unsplash.jpg",
            description: "Affordable and cozy hostel, ideal for solo travelers visiting the thermal wonderland."
        },
        {
            id: 15,
            name: "Geyser Motel",
            location: "Waiotapu Thermal Wonderland",
            longitude: 176.3782,
            latitude: -38.3501,
            building: "Motel ",
            People: "2-4",
            price: 90,
            minStay: 3,
            maxStay: 10,
            bedrooms: 2,
            bathrooms: 3,
            image: "../img/lycs-architecture-kUdbEEMcRwE-unsplash.jpg",
            description: "Comfortable motel close to the geothermal wonders of Waiotapu."
        },
        {
            id: 16,
            name: "Waiotapu Homestead",
            location: "Waiotapu Thermal Wonderland",
            longitude: 176.3782,
            latitude: -38.3501,
            building: "House ",
            People: "1-4",
            price: 240,
            minStay: 2,
            maxStay: 15,
            bedrooms: 3,
            bathrooms: 2,
            image: "../img/naomi-ellsworth-EMPLSuvDuhQ-unsplash.jpg",
            description: "Spacious homestead with all modern conveniences, perfect for families visiting Waiotapu."
        },
        // Waitomo Glowworm Caves
        {
            id: 17,
            name: "Glowworm Hotel",
            location: "Waitomo Glowworm Caves",
            longitude: 175.1029,
            latitude: -38.2617,
            building: "Hotel ",
            People: "1-2",
            price: 157,
            minStay: 1,
            maxStay: 5,
            bedrooms: 2,
            bathrooms: 2,
            image: "../img/phil-hearing-IYfp2Ixe9nM-unsplash.jpg",
            description: "Elegant hotel located near the mesmerizing Waitomo Glowworm Caves."
        },
        {
            id: 18,
            name: "Cave Hostel",
            location: "Waitomo Glowworm Caves",
            longitude: 175.1029,
            latitude: -38.2617,
            building: "Hostel ",
            People: "1",
            price: 30,
            minStay: 1,
            maxStay: 10,
            bedrooms: 1,
            bathrooms: 1,
            image: "../img/r-architecture-2gDwlIim3Uw-unsplash (1).jpg",
            description: "Budget-friendly hostel perfect for solo adventurers exploring the glowworm caves."
        },
        {
            id: 19,
            name: "Starlit Motel",
            location: "Waitomo Glowworm Caves",
            longitude: 175.1029,
            latitude: -38.2617,
            building: "Motel ",
            People: "2-4",
            price: 90,
            minStay: 3,
            maxStay: 10,
            bedrooms: 2,
            bathrooms: 3,
            image: "../img/roger-starnes-sr-BNY7m7BhS2o-unsplash.jpg",
            description: "Comfortable motel offering a cozy stay near the enchanting glowworm caves."
        },
        {
            id: 20,
            name: "Glowworm Cottage",
            location: "Waitomo Glowworm Caves",
            longitude: 175.1029,
            latitude: -38.2617,
            building: "House ",
            People: "1-4",
            price: 240,
            minStay: 2,
            maxStay: 15,
            bedrooms: 3,
            bathrooms: 2,
            image: "../img/ronnie-george-9gGvNWBeOq4-unsplash.jpg",
            description: "Charming cottage with modern amenities, ideal for families visiting the glowworm caves."
        },
        // Milford Sound
        {
            id: 21,
            name: "Milford Sound Resort",
            location: "Milford Sound",
            longitude: 167.9425,
            latitude: -44.6744,
            building: "Hotel ",
            People: "1-2",
            price: 157,
            minStay: 1,
            maxStay: 5,
            bedrooms: 2,
            bathrooms: 2,
            image: "../img/sieuwert-otterloo-aren8nutd1Q-unsplash.jpg",
            description: "Luxurious resort with breathtaking views of Milford Sound's fjords."
        },
        {
            id: 22,
            name: "Sound Hostel",
            location: "Milford Sound",
            longitude: 167.9425,
            latitude: -44.6744,
            building: "Hostel ",
            People: "1",
            price: 30,
            minStay: 1,
            maxStay: 10,
            bedrooms: 1,
            bathrooms: 1,
            image: "../img/stephan-bechert-yFV39g6AZ5o-unsplash.jpg",
            description: "Affordable hostel for solo travelers seeking adventure in Milford Sound."
        },
        {
            id: 23,
            name: "Fiordland Motel",
            location: "Milford Sound",
            longitude: 167.9425,
            latitude: -44.6744,
            building: "Motel ",
            People: "2-4",
            price: 90,
            minStay: 3,
            maxStay: 10,
            bedrooms: 2,
            bathrooms: 3,
            image: "../img/sieuwert-otterloo-aren8nutd1Q-unsplash (1).jpgnaomi-ellsworth-EMPLSuvDuhQ-unsplash.jpg",
            description: "Comfortable motel providing easy access to the stunning scenery of Milford Sound."
        },
        {
            id: 24,
            name: "Milford Haven",
            location: "Milford Sound",
            longitude: 167.9425,
            latitude: -44.6744,
            building: "House ",
            People: "1-4",
            price: 240,
            minStay: 2,
            maxStay: 15,
            bedrooms: 3,
            bathrooms: 2,
            image: "../img/vu-anh-7hHTOtSMTKs-unsplash.jpg",
            description: "Spacious house with all amenities, perfect for a family getaway in Milford Sound."
        },
        // Te Puia
        {
            id: 25,
            name: "Te Puia Springs Hotel",
            location: "Te Puia",
            longitude: 176.2497,
            latitude: -38.1368,
            building: "Hotel",
            People: "1-2",
            price: 157,
            minStay: 1,
            maxStay: 5,
            bedrooms: 2,
            bathrooms: 2,
            image: "../img/vu-anh-TiVPTYCG_3E-unsplash.jpg",
            description: "Elegant hotel offering a relaxing stay near the geothermal wonders of Te Puia."
        },
        {
            id: 26,
            name: "Geyser Hostel",
            location: "Te Puia",
            longitude: 176.2497,
            latitude: -38.1368,
            building: "Hostel",
            People: "1",
            price: 30,
            minStay: 1,
            maxStay: 10,
            bedrooms: 1,
            bathrooms: 1,
            image: "../img/vita-vilcina-KtOid0FLjqU-unsplash.jpg",
            description: "Budget-friendly hostel perfect for solo travelers exploring Te Puia."
        },
        {
            id: 27,
            name: "Te Puia Lodge",
            location: "Te Puia",
            longitude: 176.2497,
            latitude: -38.1368,
            building: "Motel",
            People: "2-4",
            price: 90,
            minStay: 3,
            maxStay: 10,
            bedrooms: 2,
            bathrooms: 3,
            image: "../img/olga-subach-SiRLWc8UE5Q-unsplash.jpg",
            description: "Comfortable lodge close to the geothermal attractions of Te Puia."
        },
        {
            id: 28,
            name: "Te Puia Retreat",
            location: "Te Puia",
            longitude: 176.2497,
            latitude: -38.1368,
            building: "House ",
            People: "1-4",
            price: 240,
            minStay: 2,
            maxStay: 15,
            bedrooms: 3,
            bathrooms: 2,
            image: "../img/louis-renaudineau-hPSobsDtXQo-unsplash.jpg",
            description: "Spacious retreat with all amenities, perfect for families visiting Te Puia."
        },
        // Toitu Otago Settlers Museum
        {
            id: 29,
            name: "Toitu Heritage Hotel",
            location: "Toitu Otago Settlers Museum",
            longitude: 170.5046,
            latitude: -45.8788,
            building: "Hotel ",
            People: "1-2",
            price: 157,
            minStay: 1,
            maxStay: 5,
            bedrooms: 2,
            bathrooms: 2,
            image: "../img/josh-hild-6kVGxIHriTA-unsplash.jpg",
            description: "Charming hotel located near the historical Toitu Otago Settlers Museum."
        },
        {
            id: 30,
            name: "Settlers Hostel",
            location: "Toitu Otago Settlers Museum",
            longitude: 170.5046,
            latitude: -45.8788,
            building: "Hostel",
            People: "1",
            price: 30,
            minStay: 1,
            maxStay: 10,
            bedrooms: 1,
            bathrooms: 1,
            image: "../img/bernard-hermant-M0k4llbRpHU-unsplash.jpg",
            description: "Affordable hostel for solo travelers interested in the history of Otago."
        },
        {
            id: 31,
            name: "Pioneer Motel",
            location: "Toitu Otago Settlers Museum",
            longitude: 170.5046,
            latitude: -45.8788,
            building: "Motel ",
            People: "2-4",
            price: 90,
            minStay: 3,
            maxStay: 10,
            bedrooms: 2,
            bathrooms: 3,
            image: "../img/andrea-davis-Iex2BWrBT3I-unsplash.jpg",
            description: "Comfortable motel offering a glimpse into the past near the settlers museum."
        },
        {
            id: 32,
            name: "Otago Homestead",
            location: "Toitu Otago Settlers Museum",
            longitude: 170.5046,
            latitude: -45.8788,
            building: "House ",
            People: "1-2",
            price: 240,
            minStay: 2,
            maxStay: 15,
            bedrooms: 3,
            bathrooms: 2,
            image: "../img/alan-j-hendry-zVf-R-r3szw-unsplash.jpg",
            description: "Spacious homestead with modern amenities, ideal for families visiting the settlers museum."
        }
    ];



   
    new fullpage('#fullpage', {
        licenseKey: 'gplv3-license',
        controlArrows: false,
        fixedElements: "#navbar",
    });

  
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA';

   
    function initaliseMap(longitude, latitude) {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [longitude, latitude],
            zoom: 13
        });

        
        new mapboxgl.Marker()
            .setLngLat([longitude, latitude])
            .addTo(map);
    }

    
    fullpage_api.setAllowScrolling(false);

   
    let swiper = new Swiper('.swiper', {
        
        direction: 'horizontal',
        
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true,
        },

       
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Search Button Click:
    $("#nextBtn").click(function (n) {
        n.preventDefault();
        fullpage_api.moveTo(1, 1);
    });

    // Populate Locations Options/Filtering:
    function populateLocationOptions() {
        const locations = Array.from(new Set(properties.map(property => property.location)));
        locations.sort(); 
        const locationSelect = $('#location'); 
        locationSelect.empty(); 
        
        locationSelect.append(`<option value="any">Any</option>`);
        
        locations.forEach(location => {
            locationSelect.append(`<option value="${location}">${location}</option>`);
        });
    }

    populateLocationOptions();

    // Validate Filters/Form
    function validateFilters() {
        let isValid = true;
        let errorMessage = "";

        if ($('#location').val() === "") {
            isValid = false;
            errorMessage += "Please select a location.<br>";
        }
        if ($("#bedrooms").val() === "") {
            isValid = false;
            errorMessage += "Please selecet the minimum number of bedrooms.<br>";
        }
        if ($("#bathrooms").val() === "") {
            isValid = false;
            errorMessage += "Please selecet the minimum number of bathrooms.<br>";
        }
        if ($('#startDate').val() === "") {
            isValid = false;
            errorMessage += "Please select a start date.<br>";
        }
        if ($('#endDate').val() === "") {
            isValid = false;
            errorMessage += "Please select an end date.<br>";
        }

        if (!isValid) {
            $('#error-message').html(errorMessage).show();
        } else {
            $('#error-message').hide();
        }

        return isValid;
    }

    // DatePickers:
    $("#startDate").datepicker({
        dateFormat: "dd/mm/yy"
    });
    $("#endDate").datepicker({
        dateFormat: "dd/mm/yy"
    });

    // Search Button Click:
    $("#searchBtn").click(function (e) {
        e.preventDefault();
        if (validateFilters()) {
            fullpage_api.moveTo(1, 2);
            filterAndDisplayProperties();
        }
    });

    // Filters & Display:
    function filterAndDisplayProperties() {
        
        const location = $('#location').val();
        const bedrooms = parseInt($('#bedrooms').val(), 10) || 0;
        const bathrooms = parseInt($('#bathrooms').val(), 10) || 0;
        const diffDays = calculateDays();
        
        const filteredProperties = properties.filter(property => {
            return (location === 'any' || property.location === location) &&
                (property.bedrooms >= bedrooms) &&
                (property.bathrooms >= bathrooms) &&
                (property.minStay <= diffDays) &&
                (property.maxStay >= diffDays);
        });

        

        displayProperties(filteredProperties);
    }
    $("#startDate, #endDate").datepicker();

    function calculateDays() {
        const startDate = $("#startDate").datepicker("getDate");
        const endDate = $("#endDate").datepicker("getDate");

        if (startDate && endDate) {
            
            const timeDiff = Math.abs(endDate.getTime() - startDate.getTime()); 
            
            const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            return diffDays;
        } else {
            return 0;
        }
    }

    function displayProperties(properties) {
        const propertiesPerPageSmall = 1;
        const propertiesPerPageMedium = 2;
        const propertiesPerPageLarge = 3;

        function getPropertiesPerPage() {
            if (window.matchMedia('(max-width: 600px)').matches) {
                return propertiesPerPageSmall;
            } else if (window.matchMedia('(max-width: 1024px)').matches) {
                return propertiesPerPageMedium;
            } else {
                return propertiesPerPageLarge;
            }
        }

        let propertiesPerPage = getPropertiesPerPage();

        const swiperWrapper = $('.swiper-wrapper');
       
        swiperWrapper.empty();

        for (let i = 0; i < properties.length; i += propertiesPerPage) {
            const slide = $('<div class="swiper-slide"></div>'); 

            for (let j = i; j < i + propertiesPerPage && j < properties.length; j++) {
                const property = properties[j];
                const propertyElement = `
            <div class="property">
                <img src="${property.image}" alt="${property.name}">
                <div class="property-details">
                    <h3>${property.name}</h3>
                    <p>${property.location}</p>
                    <p> <i class="fa-solid fa-person"></i> ${property.People} </p>
                    <p> <i class="fa-solid fa-bed"></i> ${property.bedrooms} </p>
                    <p> <i class="fa-solid fa-bath"></i> ${property.bathrooms} </p>
                    <p> <i class="fa-solid fa-dollar-sign"></i> ${property.price} </p>
                    <p>Min Stay: ${property.minStay} nights</p>
                    <p>Max Stay: ${property.maxStay} nights</p>
                    <button class="read-more" data-id="${property.id}">Read More</button>
                </div>
            </div>
        `;
                slide.append(propertyElement);
            }
            swiperWrapper.append(slide);
        }
        
        swiper.destroy(true, true);
        
        swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            pagination: {
                el: '.swiper-pagination',
            }
        });

        
        fullpage_api.reBuild();

        $(".read-more").click(function () {
            const propertyId = $(this).data('id');
            populateSelectedOutput(propertyId);
            fullpage_api.moveTo(1, 3);
        });
    }


    function populateSelectedOutput(selectedId) {
        const outputSlide = $("#selectedCardOutputSlide");

        const slideOutputHtml = `
    <div class="property-solo">
                <div class="property-details-title">                
                    <div class="arrow"><p><i class="fa-solid fa-left-long"></i></p></div>
                    <h3>${properties[selectedId - 1].name}</h3>
                </div>
                <div class="property-details-solo">
                    <div class="property-details-img">
                        <img src="${properties[selectedId - 1].image}" alt="${properties[selectedId - 1].name}">
                    </div>
                    <div class="property-details-detales">
                        <p> <i class="fa-solid fa-person"></i> ${properties[selectedId - 1].People} </p>
                        <p> <i class="fa-solid fa-bed"></i> ${properties[selectedId - 1].bedrooms} </p>
                        <p> <i class="fa-solid fa-bath"></i> ${properties[selectedId - 1].bathrooms} </p>
                        <p> <i class="fa-solid fa-dollar-sign"></i> ${properties[selectedId - 1].price} </p>
                    </div>  
                    <div class="property-details-description">
                        <p>${properties[selectedId - 1].description}</p>
                    </div> 
                    
                </div>
                <div class="property-details-options">
                    <div class="property-details-calculator">

                        <label for="guests">Number of Guests:</label>
                        <input type="number" id="guests" placeholder="Enter guests">

                        <label>Meals:</label>
                        <div class="foodopt">
                            <input type="checkbox" id="breakfast" value="15"> <p>Breakfast ($15)</p>
                        </div>
                        <div class="foodopt">
                            <input type="checkbox" id="lunch" value="24"> <p>Lunch ($24)</p>
                        </div>
                        <div class="foodopt">
                            <input type="checkbox" id="dinner" value="30"> <p>Dinner ($30)</p>
                        </div>

                    </div>
                </div> 

                <div class="calsuBtn" >
                    <button id="calculateButton">Calculate</button>
                </div>
                <h4>Total Price: $<span id="totalPrice">0</span></h4>
                    <div class="mapbox">
                        <div id="map"></div>
                    </div>
    </div>
    `;
        const longitude = properties[selectedId - 1].longitude;
        const latitude = properties[selectedId - 1].latitude;

        outputSlide.empty();
        outputSlide.append(slideOutputHtml);
        initaliseMap(longitude, latitude);

        
        $('#calculateButton').click(function () {
            var guests = parseInt($('#guests').val());
            var diffDays = calculateDays();

            var mealPrice = 0;
            if ($('#breakfast').is(':checked')) mealPrice += parseFloat($('#breakfast').val());
            if ($('#lunch').is(':checked')) mealPrice += parseFloat($('#lunch').val());
            if ($('#dinner').is(':checked')) mealPrice += parseFloat($('#dinner').val());

            // Ensure diffDays is within the allowed range
            if (diffDays < properties[selectedId - 1].minStay || diffDays > properties[selectedId - 1].maxStay) {
                alert("Please select a number of days between " + properties[selectedId - 1].minStay + " and " + properties[selectedId - 1].maxStay + ".");
                return;
            }

            if (!isNaN(mealPrice) && !isNaN(diffDays) && !isNaN(guests)) {
                var perPerson = (properties[selectedId - 1].price * diffDays) + (mealPrice * diffDays);
                var totalPrice = perPerson * guests;
                $('#totalPrice').text(totalPrice.toFixed(2));
            } else {
                alert("Please enter valid numbers in all fields.");
            }
        });
        $('.fa-solid.fa-left-long').click(function() {
            fullpage_api.moveTo(1, 2); 
        });
    }

    $("#startDate, #endDate").datepicker();

    

});