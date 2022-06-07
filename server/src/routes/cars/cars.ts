import {Request, ResponseToolkit, ServerRoute } from '@hapi/hapi';

import { ICar } from './cars.types';

const cars = [
    {
        "objectId": "ZRgPP9dBMm",
        "year": 2020,
        "make": "Audi",
        "model": "Q3",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "cptB1C1NSL",
        "year": 2020,
        "make": "Chevrolet",
        "model": "Malibu",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "ElhqsRZDnP",
        "year": 2020,
        "make": "Cadillac",
        "model": "Escalade ESV",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "LUzyWMYJpW",
        "year": 2020,
        "make": "Chevrolet",
        "model": "Corvette",
        "category": "Coupe, Convertible",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "rDkHakOBKP",
        "year": 2020,
        "make": "Acura",
        "model": "RLX",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "1JARpJ2AUB",
        "year": 2020,
        "make": "Chevrolet",
        "model": "Silverado 2500 HD Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "7G1VT2pSNO",
        "year": 2020,
        "make": "BMW",
        "model": "3 Series",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "4q7L9FAU2S",
        "year": 2020,
        "make": "Chrysler",
        "model": "Pacifica",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "jpOC5zs3jx",
        "year": 2020,
        "make": "Chevrolet",
        "model": "Colorado Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "96llWfTOAe",
        "year": 2020,
        "make": "BMW",
        "model": "X3",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "5OEvsF1R9k",
        "year": 2020,
        "make": "Acura",
        "model": "TLX",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "LNq3duGh9z",
        "year": 2020,
        "make": "Chevrolet",
        "model": "Silverado 3500 HD Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "FThs77Cddn",
        "year": 2020,
        "make": "BMW",
        "model": "7 Series",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "t9eGFMIk7E",
        "year": 2020,
        "make": "Ford",
        "model": "Fusion",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "cWQjuYWwc2",
        "year": 2020,
        "make": "Buick",
        "model": "Envision",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "2lYY81jKzR",
        "year": 2020,
        "make": "Audi",
        "model": "SQ5",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "qGDd5H3yYd",
        "year": 2020,
        "make": "Audi",
        "model": "R8",
        "category": "Coupe, Convertible",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "ALbinxfzM1",
        "year": 2020,
        "make": "Chevrolet",
        "model": "Traverse",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "9eRGwnViia",
        "year": 2020,
        "make": "Acura",
        "model": "MDX",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "kAgBF7aSaO",
        "year": 2020,
        "make": "INFINITI",
        "model": "QX80",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.666Z",
        "updatedAt": "2020-01-27T20:44:17.666Z"
    },
    {
        "objectId": "ygsDiv3hRm",
        "year": 2020,
        "make": "Buick",
        "model": "Encore",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "92pfQo6pA4",
        "year": 2020,
        "make": "GMC",
        "model": "Sierra 2500 HD Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "VfXndYon3e",
        "year": 2020,
        "make": "Honda",
        "model": "Insight",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "grl6dVnzM9",
        "year": 2020,
        "make": "Cadillac",
        "model": "XT6",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "QrYfmqcnAR",
        "year": 2020,
        "make": "Cadillac",
        "model": "XT5",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "hSaQDQkkE0",
        "year": 2020,
        "make": "Cadillac",
        "model": "XT4",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "rSQyj88Pwe",
        "year": 2020,
        "make": "Buick",
        "model": "Enclave",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "kkcmfophql",
        "year": 2020,
        "make": "Audi",
        "model": "Q5",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "V1F5kE5svr",
        "year": 2020,
        "make": "Hyundai",
        "model": "Santa Fe",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "bW6jRQ3h2S",
        "year": 2020,
        "make": "Ford",
        "model": "EcoSport",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "6YcNNwgY0C",
        "year": 2020,
        "make": "Ford",
        "model": "Escape",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "dxs3ayh6Yl",
        "year": 2020,
        "make": "Ford",
        "model": "Mustang",
        "category": "Coupe, Convertible",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "yZUeGC1bOn",
        "year": 2020,
        "make": "Hyundai",
        "model": "Sonata",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "JyMpQJbCvy",
        "year": 2020,
        "make": "Ford",
        "model": "Edge",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "VT4rtTsGBj",
        "year": 2020,
        "make": "Chevrolet",
        "model": "Camaro",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "vRQFNeVlsa",
        "year": 2020,
        "make": "Hyundai",
        "model": "Kona Electric",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "OHHuEGKsUC",
        "year": 2020,
        "make": "Chevrolet",
        "model": "Equinox",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "vu2lCeXKzk",
        "year": 2020,
        "make": "GMC",
        "model": "Sierra 3500 HD Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "rg8LbH5ixZ",
        "year": 2020,
        "make": "Jeep",
        "model": "Gladiator",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:17.666Z",
        "updatedAt": "2020-01-27T20:44:17.666Z"
    },
    {
        "objectId": "ifEdBTIVDH",
        "year": 2020,
        "make": "BMW",
        "model": "X7",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "4J2BvKonKq",
        "year": 2020,
        "make": "Cadillac",
        "model": "CT6-V",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "PlNwrAm6eM",
        "year": 2020,
        "make": "Audi",
        "model": "A7",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "VK6hmDAvqP",
        "year": 2020,
        "make": "Chevrolet",
        "model": "Blazer",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "vidGAd8cIJ",
        "year": 2020,
        "make": "Ford",
        "model": "F150 SuperCrew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "NHWgNGSFB7",
        "year": 2020,
        "make": "Chevrolet",
        "model": "Suburban",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "MTvnyKqtYJ",
        "year": 2020,
        "make": "Honda",
        "model": "Civic",
        "category": "Hatchback, Sedan, Coupe",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "wTXL9Ze5eF",
        "year": 2020,
        "make": "Jeep",
        "model": "Compass",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.666Z",
        "updatedAt": "2020-01-27T20:44:17.666Z"
    },
    {
        "objectId": "SCG7WEYdG1",
        "year": 2020,
        "make": "Cadillac",
        "model": "Escalade",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "cKnegrw5AO",
        "year": 2020,
        "make": "Chrysler",
        "model": "Voyager",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "smKxD5m9KI",
        "year": 2020,
        "make": "Honda",
        "model": "Accord Hybrid",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "ED6o8Zffqs",
        "year": 2020,
        "make": "GMC",
        "model": "Terrain",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "2ZCPYTGxDj",
        "year": 2020,
        "make": "Chevrolet",
        "model": "Spark",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "fZGBnnMx4e",
        "year": 2020,
        "make": "GMC",
        "model": "Sierra 1500 Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "6qsEYBv6eW",
        "year": 2020,
        "make": "Hyundai",
        "model": "NEXO",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "4lZKmYPbMk",
        "year": 2020,
        "make": "Hyundai",
        "model": "Veloster",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "9BdK0PtwKc",
        "year": 2020,
        "make": "Chevrolet",
        "model": "Silverado 1500 Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "H1THLG6H1Z",
        "year": 2020,
        "make": "Genesis",
        "model": "G70",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "XtDg7lwyJT",
        "year": 2020,
        "make": "Cadillac",
        "model": "CT5",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "KE29kkqLX6",
        "year": 2020,
        "make": "Honda",
        "model": "Odyssey",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "70EmSYGau7",
        "year": 2020,
        "make": "Hyundai",
        "model": "Elantra GT",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "YZj6RLht79",
        "year": 2020,
        "make": "Acura",
        "model": "RDX",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "3phIrCVLh7",
        "year": 2020,
        "make": "GMC",
        "model": "Yukon XL",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "i6jT5ByjBF",
        "year": 2020,
        "make": "Ford",
        "model": "Ranger SuperCab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "RHD7qDmzgU",
        "year": 2020,
        "make": "Ford",
        "model": "Expedition MAX",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "pJCLIx2r8E",
        "year": 2020,
        "make": "Hyundai",
        "model": "Kona",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "8kzM0APnBF",
        "year": 2020,
        "make": "INFINITI",
        "model": "QX50",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.666Z",
        "updatedAt": "2020-01-27T20:44:17.666Z"
    },
    {
        "objectId": "1AV4avrH6j",
        "year": 2020,
        "make": "Dodge",
        "model": "Durango",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "dow9fD3WF6",
        "year": 2020,
        "make": "GMC",
        "model": "Yukon",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "adJr9Qr42Q",
        "year": 2020,
        "make": "Hyundai",
        "model": "Palisade",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "F7BG83iyWo",
        "year": 2020,
        "make": "Honda",
        "model": "Ridgeline",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "VMpSU5DhdC",
        "year": 2020,
        "make": "Jeep",
        "model": "Cherokee",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.666Z",
        "updatedAt": "2020-01-27T20:44:17.666Z"
    },
    {
        "objectId": "UY03j6Fe12",
        "year": 2020,
        "make": "Chevrolet",
        "model": "Bolt EV",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "7zxuFmGDLY",
        "year": 2020,
        "make": "Ford",
        "model": "Expedition",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "pTGFRlqNAZ",
        "year": 2020,
        "make": "Hyundai",
        "model": "Elantra",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "e5835fdPKX",
        "year": 2020,
        "make": "Honda",
        "model": "Passport",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "rYV3CVGElN",
        "year": 2020,
        "make": "Dodge",
        "model": "Charger",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "DemETgxfzm",
        "year": 2020,
        "make": "Honda",
        "model": "Accord",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "ZcDno27E49",
        "year": 2020,
        "make": "INFINITI",
        "model": "QX60",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.666Z",
        "updatedAt": "2020-01-27T20:44:17.666Z"
    },
    {
        "objectId": "eQ15fbmmpw",
        "year": 2020,
        "make": "Hyundai",
        "model": "Venue",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "bAVM6QBgYF",
        "year": 2020,
        "make": "Honda",
        "model": "Pilot",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "IeeTDLPJtc",
        "year": 2020,
        "make": "Jeep",
        "model": "Grand Cherokee",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.666Z",
        "updatedAt": "2020-01-27T20:44:17.666Z"
    },
    {
        "objectId": "5nK3Kjti74",
        "year": 2020,
        "make": "Chevrolet",
        "model": "Tahoe",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "ZnSQK6bmSf",
        "year": 2020,
        "make": "GMC",
        "model": "Acadia",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "MGgtV71Gqh",
        "year": 2020,
        "make": "Chevrolet",
        "model": "Impala",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "QHVcYMkgs8",
        "year": 2020,
        "make": "Honda",
        "model": "CR-V",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "0qpktkoahP",
        "year": 2020,
        "make": "BMW",
        "model": "X5",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "wqjaR037XL",
        "year": 2020,
        "make": "INFINITI",
        "model": "Q60",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:17.666Z",
        "updatedAt": "2020-01-27T20:44:17.666Z"
    },
    {
        "objectId": "4pZjPmNsj5",
        "year": 2020,
        "make": "Ford",
        "model": "Ranger SuperCrew",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "nAVMCHuWui",
        "year": 2020,
        "make": "Chevrolet",
        "model": "Trax",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "nvlklkJGRL",
        "year": 2020,
        "make": "Hyundai",
        "model": "Ioniq Plug-in Hybrid",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "Ok8T6kagAQ",
        "year": 2020,
        "make": "Jaguar",
        "model": "E-PACE",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.666Z",
        "updatedAt": "2020-01-27T20:44:17.666Z"
    },
    {
        "objectId": "2o8HcNPula",
        "year": 2020,
        "make": "Hyundai",
        "model": "Tucson",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "IDXLjYyc46",
        "year": 2020,
        "make": "Ford",
        "model": "Explorer",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "DMfFQRFW7L",
        "year": 2020,
        "make": "Honda",
        "model": "HR-V",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "LQNej2UoF0",
        "year": 2020,
        "make": "Jaguar",
        "model": "I-PACE",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.666Z",
        "updatedAt": "2020-01-27T20:44:17.666Z"
    },
    {
        "objectId": "US1p57Oo8w",
        "year": 2020,
        "make": "INFINITI",
        "model": "Q50",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:17.666Z",
        "updatedAt": "2020-01-27T20:44:17.666Z"
    },
    {
        "objectId": "SQx4TCijoz",
        "year": 2020,
        "make": "Genesis",
        "model": "G80",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "JsaO4qw9cM",
        "year": 2020,
        "make": "Jaguar",
        "model": "F-PACE",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.666Z",
        "updatedAt": "2020-01-27T20:44:17.666Z"
    },
    {
        "objectId": "LnUsyZRETe",
        "year": 2020,
        "make": "Jeep",
        "model": "Renegade",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:17.666Z",
        "updatedAt": "2020-01-27T20:44:17.666Z"
    },
    {
        "objectId": "lJtQk4oNv7",
        "year": 2020,
        "make": "Hyundai",
        "model": "Accent",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:17.665Z",
        "updatedAt": "2020-01-27T20:44:17.665Z"
    },
    {
        "objectId": "xxKBCB6qe4",
        "year": 2020,
        "make": "Jaguar",
        "model": "F-TYPE",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:17.666Z",
        "updatedAt": "2020-01-27T20:44:17.666Z"
    },
    {
        "objectId": "0yxWejt1Kj",
        "year": 2020,
        "make": "Jeep",
        "model": "Wrangler",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.005Z",
        "updatedAt": "2020-01-27T20:44:18.005Z"
    },
    {
        "objectId": "dquJk1A8lm",
        "year": 2020,
        "make": "Kia",
        "model": "Sorento",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.005Z",
        "updatedAt": "2020-01-27T20:44:18.005Z"
    },
    {
        "objectId": "kthyzkzwOr",
        "year": 2020,
        "make": "Kia",
        "model": "Rio",
        "category": "Sedan, Hatchback",
        "createdAt": "2020-01-27T20:44:18.005Z",
        "updatedAt": "2020-01-27T20:44:18.005Z"
    },
    {
        "objectId": "l0ZxQJr6dc",
        "year": 2020,
        "make": "Land Rover",
        "model": "Discovery Sport",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "oo53hnp2P1",
        "year": 2020,
        "make": "Kia",
        "model": "Sedona",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.005Z",
        "updatedAt": "2020-01-27T20:44:18.005Z"
    },
    {
        "objectId": "nFb7cI8Sk6",
        "year": 2020,
        "make": "Kia",
        "model": "Optima",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.005Z",
        "updatedAt": "2020-01-27T20:44:18.005Z"
    },
    {
        "objectId": "YzwRfzL0uV",
        "year": 2020,
        "make": "Kia",
        "model": "Sportage",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "ZrJEw5FT5Z",
        "year": 2020,
        "make": "Kia",
        "model": "Optima Hybrid",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.005Z",
        "updatedAt": "2020-01-27T20:44:18.005Z"
    },
    {
        "objectId": "jjkQu6OvNz",
        "year": 2020,
        "make": "Kia",
        "model": "Optima Plug-in Hybrid",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.005Z",
        "updatedAt": "2020-01-27T20:44:18.005Z"
    },
    {
        "objectId": "YdnaZQmFIB",
        "year": 2020,
        "make": "Land Rover",
        "model": "Range Rover Evoque",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "4WEua9GTCy",
        "year": 2020,
        "make": "Kia",
        "model": "Telluride",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "BDXZuTt2Yh",
        "year": 2020,
        "make": "Kia",
        "model": "Forte",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.005Z",
        "updatedAt": "2020-01-27T20:44:18.005Z"
    },
    {
        "objectId": "EJq3Yt9FKG",
        "year": 2020,
        "make": "Jeep",
        "model": "Wrangler Unlimited",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.005Z",
        "updatedAt": "2020-01-27T20:44:18.005Z"
    },
    {
        "objectId": "sTp52PebGT",
        "year": 2020,
        "make": "Kia",
        "model": "Soul",
        "category": "Wagon",
        "createdAt": "2020-01-27T20:44:18.005Z",
        "updatedAt": "2020-01-27T20:44:18.005Z"
    },
    {
        "objectId": "Xv6yD7wyNA",
        "year": 2020,
        "make": "Land Rover",
        "model": "Range Rover Sport",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "HtCInoVvUS",
        "year": 2020,
        "make": "Land Rover",
        "model": "Range Rover",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "jDCmqwjhR3",
        "year": 2020,
        "make": "Kia",
        "model": "Stinger",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "EfmLCaRB79",
        "year": 2020,
        "make": "Land Rover",
        "model": "Discovery",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "eWF8kdEUAc",
        "year": 2020,
        "make": "Land Rover",
        "model": "Range Rover Velar",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "7tsGYqXUUF",
        "year": 2020,
        "make": "Lexus",
        "model": "ES",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "3L39B06Lvk",
        "year": 2020,
        "make": "Lexus",
        "model": "LC",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "BBndyIrB32",
        "year": 2020,
        "make": "Lexus",
        "model": "LX",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "Z8cpJng1P5",
        "year": 2020,
        "make": "Lexus",
        "model": "RC",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "VKR5opkrfH",
        "year": 2020,
        "make": "Lexus",
        "model": "GX",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "lqFwthLaBG",
        "year": 2020,
        "make": "Lexus",
        "model": "IS",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "OUjPRZrwv4",
        "year": 2020,
        "make": "Lexus",
        "model": "GS",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "ur0DyHrVuX",
        "year": 2020,
        "make": "Lexus",
        "model": "LS",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "Bk6SLEfNLj",
        "year": 2020,
        "make": "Lexus",
        "model": "UX",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "qEzHd8PYEr",
        "year": 2020,
        "make": "Mercedes-Benz",
        "model": "GLS",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "3vSeFSb1xL",
        "year": 2020,
        "make": "Mercedes-Benz",
        "model": "CLA",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "iP9HxrAHwE",
        "year": 2020,
        "make": "Mitsubishi",
        "model": "Outlander Sport",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "8vNEmhRrBc",
        "year": 2020,
        "make": "Lincoln",
        "model": "MKZ",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "pJ8KCIdjvW",
        "year": 2020,
        "make": "Lincoln",
        "model": "Aviator",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "KdEmV75BEr",
        "year": 2020,
        "make": "Lexus",
        "model": "NX",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "Oo3K9UZH6M",
        "year": 2020,
        "make": "MAZDA",
        "model": "CX-30",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "ENLLvc2FMe",
        "year": 2020,
        "make": "Mitsubishi",
        "model": "Eclipse Cross",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "K6qv32UGvz",
        "year": 2020,
        "make": "MAZDA",
        "model": "MAZDA3",
        "category": "Sedan, Hatchback",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "CAl0QnYLJ2",
        "year": 2020,
        "make": "Mitsubishi",
        "model": "Mirage G4",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "aHI5mPH8ej",
        "year": 2020,
        "make": "Lincoln",
        "model": "Navigator",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "mQZjcV8jrg",
        "year": 2020,
        "make": "Nissan",
        "model": "Armada",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "iqt8L2RTH8",
        "year": 2020,
        "make": "MAZDA",
        "model": "CX-5",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "kX7uNUav4L",
        "year": 2020,
        "make": "Lincoln",
        "model": "Corsair",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "u6CTuVfysm",
        "year": 2020,
        "make": "Lincoln",
        "model": "Navigator L",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "fCMzAAEtKV",
        "year": 2020,
        "make": "Mercedes-Benz",
        "model": "G-Class",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "ICcRQszKKg",
        "year": 2020,
        "make": "Lincoln",
        "model": "Nautilus",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "n7ynnBKxR7",
        "year": 2020,
        "make": "Lexus",
        "model": "RX",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "ny7Q06qq0B",
        "year": 2020,
        "make": "Nissan",
        "model": "Kicks",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "PgWKyb4ddv",
        "year": 2020,
        "make": "Nissan",
        "model": "Murano",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "5pjLCIqjlI",
        "year": 2020,
        "make": "MAZDA",
        "model": "MAZDA6",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "iwvFvdCK8G",
        "year": 2020,
        "make": "Mercedes-Benz",
        "model": "C-Class",
        "category": "Convertible, Sedan, Coupe",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "PI9vHiuNHt",
        "year": 2020,
        "make": "Nissan",
        "model": "NV3500 HD Passenger",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "Ppkgc3RCz0",
        "year": 2020,
        "make": "Mercedes-Benz",
        "model": "GLA",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "nOdWfjP8ke",
        "year": 2020,
        "make": "MAZDA",
        "model": "CX-9",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "HEEOI4PZxU",
        "year": 2020,
        "make": "Nissan",
        "model": "NV1500 Cargo",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "ITW67EHFIc",
        "year": 2020,
        "make": "Mercedes-Benz",
        "model": "E-Class",
        "category": "Coupe, Wagon, Sedan, Convertible",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "2dt5vjZVTd",
        "year": 2020,
        "make": "MINI",
        "model": "Countryman",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "P3mXDWEn4A",
        "year": 2020,
        "make": "Mercedes-Benz",
        "model": "GLE",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "kegvzbUeA0",
        "year": 2020,
        "make": "Nissan",
        "model": "Maxima",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "LUDDzahrJp",
        "year": 2020,
        "make": "Nissan",
        "model": "370Z",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "LdTQf3DHoQ",
        "year": 2020,
        "make": "Mercedes-Benz",
        "model": "GLC",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "FGVNj41ahi",
        "year": 2020,
        "make": "Mitsubishi",
        "model": "Mirage",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "HiWA5J4OkQ",
        "year": 2020,
        "make": "Nissan",
        "model": "Altima",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "e1lijtAW99",
        "year": 2020,
        "make": "Nissan",
        "model": "GT-R",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "INHGpFi6VO",
        "year": 2020,
        "make": "Mitsubishi",
        "model": "Outlander",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "oNBhBBLs3X",
        "year": 2020,
        "make": "Mitsubishi",
        "model": "Outlander PHEV",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "ZK9xucAlXl",
        "year": 2020,
        "make": "Nissan",
        "model": "NV3500 HD Cargo",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "Xhw3FFG8Xg",
        "year": 2020,
        "make": "Porsche",
        "model": "Panamera",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "DG0MniMzpR",
        "year": 2020,
        "make": "Porsche",
        "model": "Taycan",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "1nHsuy9NYl",
        "year": 2020,
        "make": "Nissan",
        "model": "Pathfinder",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "JlheVLtpok",
        "year": 2020,
        "make": "Nissan",
        "model": "Rogue",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "kGzRBCeu43",
        "year": 2020,
        "make": "Nissan",
        "model": "NV200",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "HPTe5REepK",
        "year": 2020,
        "make": "Porsche",
        "model": "911",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "mDGyeW0kbs",
        "year": 2020,
        "make": "Nissan",
        "model": "Rogue Sport",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "29bMYLpQtu",
        "year": 2020,
        "make": "Porsche",
        "model": "Macan",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "Iui1nHUG5h",
        "year": 2020,
        "make": "Porsche",
        "model": "Cayenne Coupe",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "SIQPSjVVRc",
        "year": 2020,
        "make": "Porsche",
        "model": "Cayenne",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "zgmFYlvdHx",
        "year": 2020,
        "make": "Nissan",
        "model": "NV2500 HD Cargo",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "jACG70Auym",
        "year": 2020,
        "make": "Ram",
        "model": "3500 Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "CkFqGiZlW6",
        "year": 2020,
        "make": "Ram",
        "model": "1500 Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "VXKZNum2v4",
        "year": 2020,
        "make": "Subaru",
        "model": "BRZ",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "Z5nXB7i3A7",
        "year": 2020,
        "make": "Nissan",
        "model": "Versa",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "Dm2leqJLBZ",
        "year": 2020,
        "make": "Toyota",
        "model": "Avalon",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.007Z",
        "updatedAt": "2020-01-27T20:44:18.007Z"
    },
    {
        "objectId": "ddiUDdlHma",
        "year": 2020,
        "make": "Subaru",
        "model": "WRX",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.007Z",
        "updatedAt": "2020-01-27T20:44:18.007Z"
    },
    {
        "objectId": "Wa48C9W0U9",
        "year": 2020,
        "make": "Toyota",
        "model": "Camry",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.007Z",
        "updatedAt": "2020-01-27T20:44:18.007Z"
    },
    {
        "objectId": "8nFlIZ8ixN",
        "year": 2020,
        "make": "Subaru",
        "model": "Impreza",
        "category": "Wagon, Sedan",
        "createdAt": "2020-01-27T20:44:18.007Z",
        "updatedAt": "2020-01-27T20:44:18.007Z"
    },
    {
        "objectId": "TlwQS7c839",
        "year": 2020,
        "make": "Subaru",
        "model": "Ascent",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "wlZ7oN49bD",
        "year": 2020,
        "make": "Subaru",
        "model": "Legacy",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.007Z",
        "updatedAt": "2020-01-27T20:44:18.007Z"
    },
    {
        "objectId": "maydRt0Ph8",
        "year": 2020,
        "make": "Toyota",
        "model": "Corolla Hatchback",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.007Z",
        "updatedAt": "2020-01-27T20:44:18.007Z"
    },
    {
        "objectId": "h6CUCvtOxH",
        "year": 2020,
        "make": "Subaru",
        "model": "Crosstrek",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "EBZqOFlbNQ",
        "year": 2020,
        "make": "Toyota",
        "model": "Corolla",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.007Z",
        "updatedAt": "2020-01-27T20:44:18.007Z"
    },
    {
        "objectId": "5S8PN4igRE",
        "year": 2020,
        "make": "Toyota",
        "model": "86",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.007Z",
        "updatedAt": "2020-01-27T20:44:18.007Z"
    },
    {
        "objectId": "U0OkQ1Vufy",
        "year": 2020,
        "make": "Subaru",
        "model": "Forester",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "zMTV1K1mJg",
        "year": 2020,
        "make": "Toyota",
        "model": "Avalon Hybrid",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.007Z",
        "updatedAt": "2020-01-27T20:44:18.007Z"
    },
    {
        "objectId": "8g28AwPl9W",
        "year": 2020,
        "make": "Ram",
        "model": "2500 Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.006Z",
        "updatedAt": "2020-01-27T20:44:18.006Z"
    },
    {
        "objectId": "cuwM0UhTxg",
        "year": 2020,
        "make": "Toyota",
        "model": "4Runner",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.007Z",
        "updatedAt": "2020-01-27T20:44:18.007Z"
    },
    {
        "objectId": "YL5KuTEDUx",
        "year": 2020,
        "make": "Subaru",
        "model": "Outback",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.007Z",
        "updatedAt": "2020-01-27T20:44:18.007Z"
    },
    {
        "objectId": "m5bHpRT9Lo",
        "year": 2020,
        "make": "Toyota",
        "model": "C-HR",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.007Z",
        "updatedAt": "2020-01-27T20:44:18.007Z"
    },
    {
        "objectId": "GxpbwmZa5w",
        "year": 2020,
        "make": "Toyota",
        "model": "Camry Hybrid",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.007Z",
        "updatedAt": "2020-01-27T20:44:18.007Z"
    },
    {
        "objectId": "xMFKrqRcF1",
        "year": 2020,
        "make": "Toyota",
        "model": "Corolla Hybrid",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.007Z",
        "updatedAt": "2020-01-27T20:44:18.007Z"
    },
    {
        "objectId": "6Ii0KCFBDn",
        "year": 2020,
        "make": "Toyota",
        "model": "GR Supra",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.007Z",
        "updatedAt": "2020-01-27T20:44:18.007Z"
    },
    {
        "objectId": "48wH6VM1pv",
        "year": 2020,
        "make": "Toyota",
        "model": "Highlander",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.039Z",
        "updatedAt": "2020-01-27T20:44:18.039Z"
    },
    {
        "objectId": "3e7zSCgSox",
        "year": 2020,
        "make": "Toyota",
        "model": "Prius",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.039Z",
        "updatedAt": "2020-01-27T20:44:18.039Z"
    },
    {
        "objectId": "5i45FzPw3t",
        "year": 2020,
        "make": "Toyota",
        "model": "Prius Prime",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.039Z",
        "updatedAt": "2020-01-27T20:44:18.039Z"
    },
    {
        "objectId": "AQVtIaqSAj",
        "year": 2020,
        "make": "Toyota",
        "model": "RAV4",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.039Z",
        "updatedAt": "2020-01-27T20:44:18.039Z"
    },
    {
        "objectId": "ZPmI3oTIhJ",
        "year": 2020,
        "make": "Toyota",
        "model": "Tacoma Access Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.039Z",
        "updatedAt": "2020-01-27T20:44:18.039Z"
    },
    {
        "objectId": "rEvPcEv5Fi",
        "year": 2020,
        "make": "Toyota",
        "model": "Sienna",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.039Z",
        "updatedAt": "2020-01-27T20:44:18.039Z"
    },
    {
        "objectId": "bjZktMbMDL",
        "year": 2020,
        "make": "Toyota",
        "model": "Land Cruiser",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.039Z",
        "updatedAt": "2020-01-27T20:44:18.039Z"
    },
    {
        "objectId": "2cSRz38TY9",
        "year": 2020,
        "make": "Toyota",
        "model": "Yaris",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.039Z",
        "updatedAt": "2020-01-27T20:44:18.039Z"
    },
    {
        "objectId": "gpN18fODQL",
        "year": 2020,
        "make": "Toyota",
        "model": "RAV4 Hybrid",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.039Z",
        "updatedAt": "2020-01-27T20:44:18.039Z"
    },
    {
        "objectId": "FhgtmBwp8E",
        "year": 2020,
        "make": "Toyota",
        "model": "Highlander Hybrid",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.039Z",
        "updatedAt": "2020-01-27T20:44:18.039Z"
    },
    {
        "objectId": "5sWLRFwzht",
        "year": 2020,
        "make": "Toyota",
        "model": "Sequoia",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.039Z",
        "updatedAt": "2020-01-27T20:44:18.039Z"
    },
    {
        "objectId": "mG9sBB2BuA",
        "year": 2020,
        "make": "Toyota",
        "model": "Tundra Double Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.039Z",
        "updatedAt": "2020-01-27T20:44:18.039Z"
    },
    {
        "objectId": "Al36zxCYXq",
        "year": 2020,
        "make": "Toyota",
        "model": "Tacoma Double Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.039Z",
        "updatedAt": "2020-01-27T20:44:18.039Z"
    },
    {
        "objectId": "D3Lno4qQPy",
        "year": 2020,
        "make": "Toyota",
        "model": "Tundra CrewMax",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.039Z",
        "updatedAt": "2020-01-27T20:44:18.039Z"
    },
    {
        "objectId": "djm2SnTflV",
        "year": 2020,
        "make": "Volkswagen",
        "model": "Passat",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.039Z",
        "updatedAt": "2020-01-27T20:44:18.039Z"
    },
    {
        "objectId": "4beWimqyBE",
        "year": 2020,
        "make": "Toyota",
        "model": "Yaris Hatchback",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.039Z",
        "updatedAt": "2020-01-27T20:44:18.039Z"
    },
    {
        "objectId": "k4x1WAXEZ9",
        "year": 2019,
        "make": "Acura",
        "model": "MDX Sport Hybrid",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.044Z",
        "updatedAt": "2020-01-27T20:44:18.044Z"
    },
    {
        "objectId": "xiuaACVHIm",
        "year": 2019,
        "make": "Acura",
        "model": "RLX Sport Hybrid",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.044Z",
        "updatedAt": "2020-01-27T20:44:18.044Z"
    },
    {
        "objectId": "hRySxJexbG",
        "year": 2019,
        "make": "Audi",
        "model": "A6",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "3V6UiNPcsa",
        "year": 2020,
        "make": "Volvo",
        "model": "XC40",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.044Z",
        "updatedAt": "2020-01-27T20:44:18.044Z"
    },
    {
        "objectId": "ZIUyePmTUL",
        "year": 2019,
        "make": "Audi",
        "model": "Q5",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "IQ4VfhGUnv",
        "year": 2019,
        "make": "Audi",
        "model": "A4",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "LAsic8cF0o",
        "year": 2019,
        "make": "Audi",
        "model": "Q7",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "qLWZQZpHWY",
        "year": 2019,
        "make": "Audi",
        "model": "Q8",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "KegjzAaXJ2",
        "year": 2019,
        "make": "Audi",
        "model": "RS 5",
        "category": "Sedan, Coupe",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "uqBo3T1sHU",
        "year": 2019,
        "make": "Acura",
        "model": "MDX",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.044Z",
        "updatedAt": "2020-01-27T20:44:18.044Z"
    },
    {
        "objectId": "HcLCgxYpnA",
        "year": 2019,
        "make": "Acura",
        "model": "NSX",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.044Z",
        "updatedAt": "2020-01-27T20:44:18.044Z"
    },
    {
        "objectId": "s8PL6aoYRy",
        "year": 2019,
        "make": "Audi",
        "model": "A7",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "BsrsAho8K3",
        "year": 2019,
        "make": "Alfa Romeo",
        "model": "4C Spider",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:18.044Z",
        "updatedAt": "2020-01-27T20:44:18.044Z"
    },
    {
        "objectId": "Pj3LtYhfOx",
        "year": 2020,
        "make": "Volvo",
        "model": "XC60",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.044Z",
        "updatedAt": "2020-01-27T20:44:18.044Z"
    },
    {
        "objectId": "bOlyekNqwt",
        "year": 2019,
        "make": "Acura",
        "model": "RDX",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.044Z",
        "updatedAt": "2020-01-27T20:44:18.044Z"
    },
    {
        "objectId": "RMG3R3vsCw",
        "year": 2020,
        "make": "Volkswagen",
        "model": "Tiguan",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.044Z",
        "updatedAt": "2020-01-27T20:44:18.044Z"
    },
    {
        "objectId": "PGFBTmE2L6",
        "year": 2020,
        "make": "Volvo",
        "model": "XC90",
        "category": "SUV1992",
        "createdAt": "2020-01-27T20:44:18.044Z",
        "updatedAt": "2020-01-27T20:44:18.044Z"
    },
    {
        "objectId": "qaKbuo5AT9",
        "year": 2019,
        "make": "Audi",
        "model": "A8",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "Tkm6RAiXMk",
        "year": 2019,
        "make": "BMW",
        "model": "4 Series",
        "category": "Convertible, Sedan, Coupe",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "r9nUwoh749",
        "year": 2019,
        "make": "Acura",
        "model": "TLX",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.044Z",
        "updatedAt": "2020-01-27T20:44:18.044Z"
    },
    {
        "objectId": "mTQ0bSYkrY",
        "year": 2019,
        "make": "Acura",
        "model": "ILX",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.044Z",
        "updatedAt": "2020-01-27T20:44:18.044Z"
    },
    {
        "objectId": "IM66EEMjxe",
        "year": 2019,
        "make": "BMW",
        "model": "2 Series",
        "category": "Coupe, Convertible",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "sLLtnh5CNL",
        "year": 2019,
        "make": "Audi",
        "model": "A3",
        "category": "Convertible, Sedan",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "HrfJ77bDEq",
        "year": 2019,
        "make": "Audi",
        "model": "S5",
        "category": "Sedan, Coupe, Convertible",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "hxBd1z7ewE",
        "year": 2019,
        "make": "Audi",
        "model": "A4 allroad",
        "category": "Wagon",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "WHqkPTraez",
        "year": 2019,
        "make": "Audi",
        "model": "e-tron",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "66pQq50mso",
        "year": 2020,
        "make": "Volkswagen",
        "model": "Jetta",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.039Z",
        "updatedAt": "2020-01-27T20:44:18.039Z"
    },
    {
        "objectId": "GoIb4TNqDz",
        "year": 2019,
        "make": "Audi",
        "model": "Q3",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "FBvxwCM8vu",
        "year": 2019,
        "make": "Audi",
        "model": "RS 3",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "kgUoGEiena",
        "year": 2019,
        "make": "Alfa Romeo",
        "model": "Stelvio",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.044Z",
        "updatedAt": "2020-01-27T20:44:18.044Z"
    },
    {
        "objectId": "aycZC5J2yw",
        "year": 2019,
        "make": "Alfa Romeo",
        "model": "Giulia",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.044Z",
        "updatedAt": "2020-01-27T20:44:18.044Z"
    },
    {
        "objectId": "juIznkRAZE",
        "year": 2019,
        "make": "Audi",
        "model": "A5",
        "category": "Coupe, Sedan, Convertible",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "Ob5YiBNNIn",
        "year": 2019,
        "make": "Acura",
        "model": "RLX",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.044Z",
        "updatedAt": "2020-01-27T20:44:18.044Z"
    },
    {
        "objectId": "8ZTMjzHn9X",
        "year": 2019,
        "make": "Audi",
        "model": "S3",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "pe7eJ4gnen",
        "year": 2019,
        "make": "Audi",
        "model": "S4",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "ATAeU1NdOi",
        "year": 2019,
        "make": "BMW",
        "model": "3 Series",
        "category": "Sedan, Wagon",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "orUpo0E0vC",
        "year": 2019,
        "make": "Audi",
        "model": "SQ5",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "KhES0MZcmQ",
        "year": 2019,
        "make": "BMW",
        "model": "5 Series",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "cR3800xX9I",
        "year": 2019,
        "make": "BMW",
        "model": "M5",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "vAAn0VApSF",
        "year": 2019,
        "make": "BMW",
        "model": "i8",
        "category": "Convertible, Coupe",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "E5Nznq1T2p",
        "year": 2019,
        "make": "BMW",
        "model": "8 Series",
        "category": "Coupe, Convertible",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "aKCqI0lYGI",
        "year": 2019,
        "make": "BMW",
        "model": "M6",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "VIhUyOqv71",
        "year": 2019,
        "make": "BMW",
        "model": "i3",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "XBrBhQmegp",
        "year": 2019,
        "make": "BMW",
        "model": "7 Series",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "jaHnDRVmdp",
        "year": 2019,
        "make": "BMW",
        "model": "X3",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "tHGwhMRQQb",
        "year": 2019,
        "make": "BMW",
        "model": "6 Series",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "iFCVGMra0O",
        "year": 2019,
        "make": "BMW",
        "model": "M4",
        "category": "Coupe, Convertible",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "UrwYndiCmO",
        "year": 2019,
        "make": "Audi",
        "model": "TT",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "hPNqqtDTH1",
        "year": 2019,
        "make": "Cadillac",
        "model": "Escalade",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "jPUGrODd0n",
        "year": 2019,
        "make": "Buick",
        "model": "Regal Sportback",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "b1gzw7oX90",
        "year": 2019,
        "make": "BMW",
        "model": "X6 M",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "rJUe9JJjYP",
        "year": 2019,
        "make": "BMW",
        "model": "X2",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "8BoPqgaMmq",
        "year": 2019,
        "make": "Cadillac",
        "model": "CTS-V",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "Z3DPbJhczG",
        "year": 2019,
        "make": "BMW",
        "model": "X1",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "VMdmpIMkre",
        "year": 2019,
        "make": "BMW",
        "model": "X6",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "5SQO904EKs",
        "year": 2019,
        "make": "BMW",
        "model": "X4",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "ydHCEwuOSK",
        "year": 2019,
        "make": "Chevrolet",
        "model": "Camaro",
        "category": "Coupe, Convertible",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "bdW1WipxOD",
        "year": 2019,
        "make": "Cadillac",
        "model": "Escalade ESV",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "7rEqkISfEg",
        "year": 2019,
        "make": "Chevrolet",
        "model": "Blazer",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "bUID4Xe3GM",
        "year": 2019,
        "make": "Cadillac",
        "model": "CT6",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "OvJ1MbKJ7E",
        "year": 2019,
        "make": "BMW",
        "model": "X5",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "TBvFCspGgt",
        "year": 2019,
        "make": "Buick",
        "model": "Regal TourX",
        "category": "Wagon",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "8o6fButQzD",
        "year": 2019,
        "make": "Chevrolet",
        "model": "Colorado Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "iL7xFdHl3K",
        "year": 2019,
        "make": "Chevrolet",
        "model": "Bolt EV",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "BmG5IqBkAo",
        "year": 2019,
        "make": "Cadillac",
        "model": "CT6-V",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "KRZ7KM1gCr",
        "year": 2019,
        "make": "BMW",
        "model": "M2",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "DnI5QxWFIA",
        "year": 2019,
        "make": "BMW",
        "model": "X7",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "DBxB7Fmlrj",
        "year": 2019,
        "make": "Buick",
        "model": "Envision",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "NCa9BCUXGA",
        "year": 2019,
        "make": "Buick",
        "model": "Cascada",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "HgIDfTJIxQ",
        "year": 2019,
        "make": "Cadillac",
        "model": "XT5",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "gA8GmQ6bsz",
        "year": 2019,
        "make": "Cadillac",
        "model": "XT4",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "7aW91qXGjR",
        "year": 2019,
        "make": "Buick",
        "model": "Encore",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "EKjjWdBykw",
        "year": 2019,
        "make": "Buick",
        "model": "Enclave",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "VjLnWMAK4l",
        "year": 2019,
        "make": "Cadillac",
        "model": "CTS",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "kVDbBVlC7w",
        "year": 2019,
        "make": "Chevrolet",
        "model": "Cruze",
        "category": "Sedan, Hatchback",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "awEF9ZwubP",
        "year": 2019,
        "make": "Chevrolet",
        "model": "Equinox",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "k5iF1PYOaL",
        "year": 2019,
        "make": "Chevrolet",
        "model": "Corvette",
        "category": "Coupe, Convertible",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "red9UTu8fA",
        "year": 2019,
        "make": "BMW",
        "model": "Z4",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "YoSf7DjkX5",
        "year": 2019,
        "make": "Cadillac",
        "model": "XTS",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "XzU7AIvyeG",
        "year": 2019,
        "make": "Buick",
        "model": "LaCrosse",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "OMSftwK8IO",
        "year": 2019,
        "make": "Cadillac",
        "model": "ATS-V",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "tQjEc8cJ8B",
        "year": 2019,
        "make": "Cadillac",
        "model": "ATS",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "YP2Mf2anan",
        "year": 2019,
        "make": "Chevrolet",
        "model": "Express 2500 Cargo",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "e4S9bbVWIp",
        "year": 2019,
        "make": "Chevrolet",
        "model": "Colorado Extended Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.045Z",
        "updatedAt": "2020-01-27T20:44:18.045Z"
    },
    {
        "objectId": "AEpMzZOnKV",
        "year": 2019,
        "make": "Chevrolet",
        "model": "Express 2500 Passenger",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "s7oSo0M9y7",
        "year": 2019,
        "make": "Chevrolet",
        "model": "Express 3500 Passenger",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "atFHXEgXYw",
        "year": 2019,
        "make": "Chevrolet",
        "model": "Impala",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "OxT9QW16ZW",
        "year": 2019,
        "make": "Chevrolet",
        "model": "Silverado 2500 HD Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "iObFnlwCdJ",
        "year": 2019,
        "make": "Chevrolet",
        "model": "Malibu",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "KLXRvqnAIf",
        "year": 2019,
        "make": "Chevrolet",
        "model": "Silverado 2500 HD Double Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "kmfBx990rf",
        "year": 2019,
        "make": "Chevrolet",
        "model": "Silverado 1500 Regular Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "GiRoJanAFO",
        "year": 2019,
        "make": "Chevrolet",
        "model": "Express 3500 Cargo",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "R6FTcHj2kE",
        "year": 2019,
        "make": "Chevrolet",
        "model": "Silverado 1500 LD Double Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "ncQWDq66xy",
        "year": 2019,
        "make": "Chevrolet",
        "model": "Silverado 2500 HD Regular Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "f2t9apHuKN",
        "year": 2019,
        "make": "Chevrolet",
        "model": "Silverado 1500 Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "3efpWhWzug",
        "year": 2019,
        "make": "Chevrolet",
        "model": "Silverado 1500 Double Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "YxUnFkrUcr",
        "year": 2019,
        "make": "Chevrolet",
        "model": "Sonic",
        "category": "Sedan, Hatchback",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "GunE0Ahhyd",
        "year": 2019,
        "make": "Chevrolet",
        "model": "Spark",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "mWCJ5zoFbj",
        "year": 2019,
        "make": "Chevrolet",
        "model": "Silverado 3500 HD Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "VkNqMZTN5f",
        "year": 2019,
        "make": "Chrysler",
        "model": "Pacifica Hybrid",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "feB5OmNc4A",
        "year": 2019,
        "make": "Dodge",
        "model": "Durango",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "A1d1zXcY5n",
        "year": 2019,
        "make": "Dodge",
        "model": "Charger",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "u7Evv1bet4",
        "year": 2019,
        "make": "Chevrolet",
        "model": "Suburban",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "YeYZ8uM1Z7",
        "year": 2019,
        "make": "Chevrolet",
        "model": "Trax",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "uaZ6ZXzGRp",
        "year": 2019,
        "make": "Dodge",
        "model": "Challenger",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "czvEZAD0ob",
        "year": 2019,
        "make": "Chevrolet",
        "model": "Tahoe",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "RTczc52mmH",
        "year": 2019,
        "make": "Ford",
        "model": "EcoSport",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "BRoyACZLHD",
        "year": 2019,
        "make": "FIAT",
        "model": "500L",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "ZlhJO6awDf",
        "year": 2019,
        "make": "Chevrolet",
        "model": "Volt",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "CLFodpBcPh",
        "year": 2019,
        "make": "Chrysler",
        "model": "Pacifica",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "ECvyRquINn",
        "year": 2019,
        "make": "FIAT",
        "model": "500e",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "jqaCwZrPPH",
        "year": 2019,
        "make": "FIAT",
        "model": "500",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "FuchiGoVMM",
        "year": 2019,
        "make": "Dodge",
        "model": "Journey",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "7LxHDNE7TT",
        "year": 2019,
        "make": "Ford",
        "model": "F150 Super Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "kN367T77Kw",
        "year": 2019,
        "make": "Chevrolet",
        "model": "Suburban 3500HD",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "zEgDI23VXc",
        "year": 2019,
        "make": "Dodge",
        "model": "Grand Caravan Passenger",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "Rmquglmw9J",
        "year": 2019,
        "make": "Chrysler",
        "model": "300",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "MIZyNzuPSk",
        "year": 2019,
        "make": "FIAT",
        "model": "500c",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "aKNpq4aizW",
        "year": 2019,
        "make": "Ford",
        "model": "Expedition MAX",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "BBIZrM3Eql",
        "year": 2019,
        "make": "Ford",
        "model": "Edge",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "Z0rOkKwjuf",
        "year": 2019,
        "make": "Chevrolet",
        "model": "Traverse",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "uExfuPZbEN",
        "year": 2019,
        "make": "Ford",
        "model": "Escape",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "FLOSDjLAvP",
        "year": 2019,
        "make": "FIAT",
        "model": "500 Abarth",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "F7vtqOBHMW",
        "year": 2019,
        "make": "Ford",
        "model": "Expedition",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "LlVSThmAXq",
        "year": 2019,
        "make": "FIAT",
        "model": "124 Spider",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "4JU3SOnt71",
        "year": 2019,
        "make": "Ford",
        "model": "F150 SuperCrew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "ZILY8006BY",
        "year": 2019,
        "make": "Ford",
        "model": "F250 Super Duty Regular Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "uPir5syPGG",
        "year": 2019,
        "make": "FIAT",
        "model": "500X",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "MRVh65geUW",
        "year": 2019,
        "make": "FIAT",
        "model": "500c Abarth",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "wxsW6AqN7R",
        "year": 2019,
        "make": "Ford",
        "model": "Explorer",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "FuJqB31eBE",
        "year": 2019,
        "make": "Ford",
        "model": "F150 Regular Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "EEflW65kE1",
        "year": 2019,
        "make": "Ford",
        "model": "F450 Super Duty Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "rtzXgeNgOS",
        "year": 2019,
        "make": "Ford",
        "model": "F350 Super Duty Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "XrFDkOJeoH",
        "year": 2019,
        "make": "Ford",
        "model": "Fiesta",
        "category": "Hatchback, Sedan",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "DedImXkFPS",
        "year": 2019,
        "make": "Ford",
        "model": "F250 Super Duty Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "r50LNSyvil",
        "year": 2019,
        "make": "Ford",
        "model": "Ranger SuperCab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "72Vrlo4wxf",
        "year": 2019,
        "make": "Ford",
        "model": "F350 Super Duty Super Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "dhwD1JA7nj",
        "year": 2019,
        "make": "Ford",
        "model": "Flex",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "UzPiXYyxvI",
        "year": 2019,
        "make": "Ford",
        "model": "Fusion",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "GqWMI6elLq",
        "year": 2019,
        "make": "Ford",
        "model": "Transit 150 Van",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "yEGFPezu4E",
        "year": 2019,
        "make": "GMC",
        "model": "Canyon Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "7jnMVzWPVr",
        "year": 2019,
        "make": "Genesis",
        "model": "G90",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "6CEQlGRy7q",
        "year": 2019,
        "make": "Ford",
        "model": "Fusion Energi",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "5O2BjXUI4Y",
        "year": 2019,
        "make": "Ford",
        "model": "Transit Connect Cargo",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "SlPnx4lV12",
        "year": 2019,
        "make": "Ford",
        "model": "Transit 150 Wagon",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "97YAn0zfaS",
        "year": 2019,
        "make": "Ford",
        "model": "Transit 350 Van",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "20SjN3YmG5",
        "year": 2019,
        "make": "Ford",
        "model": "Ranger SuperCrew",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "UqBxivRhCm",
        "year": 2019,
        "make": "Ford",
        "model": "Mustang",
        "category": "Coupe, Convertible",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "d7lsStSuAu",
        "year": 2019,
        "make": "Ford",
        "model": "F250 Super Duty Super Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.077Z",
        "updatedAt": "2020-01-27T20:44:18.077Z"
    },
    {
        "objectId": "Gei8TWj7Ji",
        "year": 2019,
        "make": "GMC",
        "model": "Sierra 1500 Double Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "24C2C2SFEg",
        "year": 2019,
        "make": "Ford",
        "model": "Transit 250 Van",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "8jCgRj2Cuz",
        "year": 2019,
        "make": "Ford",
        "model": "Transit 350 Wagon",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "w9dn8DsUs5",
        "year": 2019,
        "make": "Ford",
        "model": "Transit Connect Passenger",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "CYIgiVYHb7",
        "year": 2019,
        "make": "Freightliner",
        "model": "Sprinter 2500 Cargo",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "71EJBjSZAV",
        "year": 2019,
        "make": "Ford",
        "model": "Taurus",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "AaB3GxYSgC",
        "year": 2019,
        "make": "GMC",
        "model": "Sierra 1500 Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "PWHGnLlB27",
        "year": 2019,
        "make": "GMC",
        "model": "Sierra 1500 Limited Double Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "O0c2vF3OlU",
        "year": 2019,
        "make": "GMC",
        "model": "Yukon XL",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "kxePKV1pBj",
        "year": 2019,
        "make": "Honda",
        "model": "CR-V",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "jSmoxFud4I",
        "year": 2019,
        "make": "Genesis",
        "model": "G80",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "Oqvw99xVpG",
        "year": 2019,
        "make": "GMC",
        "model": "Acadia",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "8ijNrwNuGE",
        "year": 2019,
        "make": "Honda",
        "model": "Clarity Electric",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "r3EtSXsfPL",
        "year": 2019,
        "make": "GMC",
        "model": "Sierra 2500 HD Double Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "Gm1BUf0ikY",
        "year": 2019,
        "make": "GMC",
        "model": "Sierra 2500 HD Regular Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "UMlkJd94c6",
        "year": 2019,
        "make": "Genesis",
        "model": "G70",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "HXrBCmU7k2",
        "year": 2019,
        "make": "GMC",
        "model": "Sierra 3500 HD Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "wyhZDsmeYR",
        "year": 2019,
        "make": "GMC",
        "model": "Canyon Extended Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "irnTVMgsfQ",
        "year": 2019,
        "make": "GMC",
        "model": "Sierra 1500 Regular Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "gXq8CE8WC8",
        "year": 2019,
        "make": "Honda",
        "model": "Civic Type R",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "apIbmoEhA7",
        "year": 2019,
        "make": "GMC",
        "model": "Yukon",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "Pk5IoxYEBr",
        "year": 2019,
        "make": "GMC",
        "model": "Terrain",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "5CMNXF7Yfw",
        "year": 2019,
        "make": "Honda",
        "model": "Civic",
        "category": "Coupe, Sedan, Hatchback",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "qtD75k4YA1",
        "year": 2019,
        "make": "GMC",
        "model": "Sierra 2500 HD Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "9q6NXEUMLr",
        "year": 2019,
        "make": "Honda",
        "model": "Accord",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "A6Qu6b9jaT",
        "year": 2019,
        "make": "Honda",
        "model": "Accord Hybrid",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "8WLgIWHP09",
        "year": 2019,
        "make": "Honda",
        "model": "Clarity Fuel Cell",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "eVsRYAmaEE",
        "year": 2019,
        "make": "Honda",
        "model": "HR-V",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "dFq9wWoItu",
        "year": 2019,
        "make": "Honda",
        "model": "Clarity Plug-in Hybrid",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "lHP9pIS0GR",
        "year": 2019,
        "make": "Honda",
        "model": "Insight",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "vVoTgU2GnN",
        "year": 2019,
        "make": "Honda",
        "model": "Passport",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "786nNx9d2X",
        "year": 2019,
        "make": "Honda",
        "model": "Ridgeline",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "2jMo41ZuhS",
        "year": 2019,
        "make": "Honda",
        "model": "Pilot",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "p8qFjChvDd",
        "year": 2019,
        "make": "Honda",
        "model": "Fit",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "Ck5FaknPC0",
        "year": 2019,
        "make": "Honda",
        "model": "Odyssey",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.078Z",
        "updatedAt": "2020-01-27T20:44:18.078Z"
    },
    {
        "objectId": "21JJCm089n",
        "year": 2019,
        "make": "Hyundai",
        "model": "Accent",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "sPcSYnNKs7",
        "year": 2019,
        "make": "Hyundai",
        "model": "Ioniq Electric",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "BMLC9Sfw9h",
        "year": 2019,
        "make": "Hyundai",
        "model": "Sonata Hybrid",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "7tZV6s6BHW",
        "year": 2019,
        "make": "Hyundai",
        "model": "Elantra",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "9njEujFOH3",
        "year": 2019,
        "make": "Hyundai",
        "model": "Ioniq Plug-in Hybrid",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "pZRGx80XsH",
        "year": 2019,
        "make": "INFINITI",
        "model": "Q60",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "HAtex6Wnlk",
        "year": 2019,
        "make": "Hyundai",
        "model": "Sonata",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "pyzq4Ow5oc",
        "year": 2019,
        "make": "Hyundai",
        "model": "NEXO",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "ZTGbJhNsmT",
        "year": 2019,
        "make": "Hyundai",
        "model": "Kona",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "VgbjMqpcq3",
        "year": 2019,
        "make": "Hyundai",
        "model": "Kona Electric",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "TLG3bbPmMk",
        "year": 2019,
        "make": "Hyundai",
        "model": "Elantra GT",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "u7QlOpoQIq",
        "year": 2019,
        "make": "INFINITI",
        "model": "Q50",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "n3MHo6M2Ea",
        "year": 2019,
        "make": "Hyundai",
        "model": "Ioniq Hybrid",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "GDtqfkSqHR",
        "year": 2019,
        "make": "Hyundai",
        "model": "Sonata Plug-in Hybrid",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "KAaaEFtOwB",
        "year": 2019,
        "make": "Hyundai",
        "model": "Santa Fe",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "PO26cSuSah",
        "year": 2019,
        "make": "INFINITI",
        "model": "Q70",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "Iqv7uSdwOL",
        "year": 2019,
        "make": "INFINITI",
        "model": "QX60",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "Kr4yITGtnH",
        "year": 2019,
        "make": "Hyundai",
        "model": "Veloster",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "4PLzuSUnPl",
        "year": 2019,
        "make": "INFINITI",
        "model": "QX80",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "9N0VC2V8Lq",
        "year": 2019,
        "make": "INFINITI",
        "model": "QX50",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "3PQXYsurwW",
        "year": 2019,
        "make": "Hyundai",
        "model": "Tucson",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "RefcbmSGZD",
        "year": 2019,
        "make": "Jaguar",
        "model": "I-PACE",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "vYON8XL1vO",
        "year": 2019,
        "make": "INFINITI",
        "model": "QX30",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "MaigFrvPgw",
        "year": 2019,
        "make": "Jaguar",
        "model": "XE",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "vauIYHcE2o",
        "year": 2019,
        "make": "Kia",
        "model": "Sedona",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "BlvHJw67FE",
        "year": 2019,
        "make": "Kia",
        "model": "Niro",
        "category": "Wagon",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "9aFNeT0JiE",
        "year": 2019,
        "make": "Jaguar",
        "model": "E-PACE",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "l8AObm8Y51",
        "year": 2019,
        "make": "Jeep",
        "model": "Compass",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "jRvW1t50cE",
        "year": 2019,
        "make": "Jeep",
        "model": "Grand Cherokee",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "1eU9qsZDZx",
        "year": 2019,
        "make": "Jeep",
        "model": "Renegade",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "1YsH0weH9q",
        "year": 2019,
        "make": "Jaguar",
        "model": "F-PACE",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "Hk2YzPrLyZ",
        "year": 2019,
        "make": "Jeep",
        "model": "Cherokee",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "3P6keannNx",
        "year": 2019,
        "make": "Jaguar",
        "model": "XF",
        "category": "Wagon, Sedan",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "Aik5uY0Sap",
        "year": 2019,
        "make": "Jaguar",
        "model": "F-TYPE",
        "category": "Coupe, Convertible",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "trFKSjakVG",
        "year": 2019,
        "make": "Jaguar",
        "model": "XJ",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "uASC2CeiNI",
        "year": 2019,
        "make": "Kia",
        "model": "Forte",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "7K7yn7aF0H",
        "year": 2019,
        "make": "Jeep",
        "model": "Wrangler Unlimited",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "jAs90mkJSf",
        "year": 2019,
        "make": "Jeep",
        "model": "Wrangler",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "v7TVyFWiGK",
        "year": 2019,
        "make": "Kia",
        "model": "Niro Plug-in Hybrid",
        "category": "Wagon",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "MIZt9mhy3U",
        "year": 2019,
        "make": "Kia",
        "model": "Optima Hybrid",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "Eq25qAUGlu",
        "year": 2019,
        "make": "Kia",
        "model": "Cadenza",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "S8f6DVRFHG",
        "year": 2019,
        "make": "Kia",
        "model": "K900",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "5CexhulSo5",
        "year": 2019,
        "make": "Kia",
        "model": "Niro EV",
        "category": "Wagon",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "eDVTKyAIoA",
        "year": 2019,
        "make": "Kia",
        "model": "Optima",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "yaLmQgS8nf",
        "year": 2019,
        "make": "Kia",
        "model": "Optima Plug-in Hybrid",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "T7NBCpDh4t",
        "year": 2019,
        "make": "Kia",
        "model": "Stinger",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "DnjCmgXrJ8",
        "year": 2019,
        "make": "Kia",
        "model": "Rio",
        "category": "Sedan, Hatchback",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "k0CJEoTN8j",
        "year": 2019,
        "make": "Land Rover",
        "model": "Discovery",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "6gxV3o00Di",
        "year": 2019,
        "make": "Kia",
        "model": "Sorento",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "NgQmrdud6E",
        "year": 2019,
        "make": "Kia",
        "model": "Sportage",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "2dpysvLQk2",
        "year": 2019,
        "make": "Land Rover",
        "model": "Range Rover Sport",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "TnJ3Xuyxki",
        "year": 2019,
        "make": "Lexus",
        "model": "GX",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "Myub4qLsK0",
        "year": 2019,
        "make": "Kia",
        "model": "Soul",
        "category": "Wagon",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "2x4ip0yYyB",
        "year": 2019,
        "make": "Lexus",
        "model": "GS",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "2hWQn2ipRD",
        "year": 2019,
        "make": "Land Rover",
        "model": "Range Rover Velar",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "wrHJRBtayL",
        "year": 2019,
        "make": "Land Rover",
        "model": "Range Rover Evoque",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "jW5w33TXoR",
        "year": 2019,
        "make": "Lexus",
        "model": "LC",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "FMtppd4huW",
        "year": 2019,
        "make": "Kia",
        "model": "Soul EV",
        "category": "Wagon",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "iyy1mCT0X7",
        "year": 2019,
        "make": "Lexus",
        "model": "NX",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "tXwippFez7",
        "year": 2019,
        "make": "Lexus",
        "model": "RC",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "igUY33tAFm",
        "year": 2019,
        "make": "Lexus",
        "model": "IS",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "SkFH6pGWD4",
        "year": 2019,
        "make": "Lexus",
        "model": "ES",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "Pvw3Ln9OPY",
        "year": 2019,
        "make": "Land Rover",
        "model": "Discovery Sport",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "fSOkVAdVqN",
        "year": 2019,
        "make": "Land Rover",
        "model": "Range Rover",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "2WvbfpAXK0",
        "year": 2019,
        "make": "Lincoln",
        "model": "MKZ",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "FMCCyUTicL",
        "year": 2019,
        "make": "Maserati",
        "model": "Levante",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "xGmyZ55Pat",
        "year": 2019,
        "make": "MAZDA",
        "model": "MX-5 Miata RF",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "gavE1OWty5",
        "year": 2019,
        "make": "Lexus",
        "model": "LX",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "D09ERSBFwZ",
        "year": 2019,
        "make": "MAZDA",
        "model": "CX-9",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "rluUQnPq8D",
        "year": 2019,
        "make": "MAZDA",
        "model": "MX-5 Miata",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "AaSuZ5Gw4N",
        "year": 2019,
        "make": "MAZDA",
        "model": "CX-5",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "IUa9RKfPbE",
        "year": 2019,
        "make": "Lexus",
        "model": "UX",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "1yOXTImolU",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "CLA",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "AAcjf3pwAe",
        "year": 2019,
        "make": "Lincoln",
        "model": "Continental",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "xpHhaAu2RU",
        "year": 2019,
        "make": "Lincoln",
        "model": "MKT",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "YgxhrAvMGv",
        "year": 2019,
        "make": "Lincoln",
        "model": "Navigator L",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "8pUioUFUmA",
        "year": 2019,
        "make": "Lincoln",
        "model": "Nautilus",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "9f3xDusU2a",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "GLC",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "rHJHBHY5JV",
        "year": 2019,
        "make": "Lexus",
        "model": "RX",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "4YF3ffOn1E",
        "year": 2019,
        "make": "MAZDA",
        "model": "CX-3",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "5YxNDT54kG",
        "year": 2019,
        "make": "Lincoln",
        "model": "MKC",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "sjFmMhtHne",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "A-Class",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "iilXFrGUKs",
        "year": 2019,
        "make": "MAZDA",
        "model": "MAZDA6",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "L3UUjBoD6C",
        "year": 2019,
        "make": "MAZDA",
        "model": "MAZDA3",
        "category": "Sedan, Hatchback",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "3ZU4b7Aoqj",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "C-Class",
        "category": "Convertible, Sedan, Coupe",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "PX60Trl3YG",
        "year": 2019,
        "make": "Lexus",
        "model": "LS",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "IdkeSusVpn",
        "year": 2019,
        "make": "Maserati",
        "model": "Ghibli",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "eWJOe8z7sY",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "Mercedes-AMG C-Class",
        "category": "Sedan, Convertible, Coupe",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "bKsh9qdpB7",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "GLS",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "GGTn4FFGyC",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "G-Class",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "0JAntNRxL1",
        "year": 2019,
        "make": "Lincoln",
        "model": "Navigator",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "m4XvTm2oBL",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "GLA",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "Rshg1baXqJ",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "E-Class",
        "category": "Coupe, Sedan, Wagon, Convertible",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "2ZHDQAYQdi",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "CLS",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "FUDdfcEzKV",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "Mercedes-AMG CLA",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "CHI8VGWfsD",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "GLC Coupe",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "rdVV9ZLVAN",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "Mercedes-AMG CLS",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "AkWg4UMAi8",
        "year": 2019,
        "make": "Hyundai",
        "model": "Santa Fe XL",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.113Z",
        "updatedAt": "2020-01-27T20:44:18.113Z"
    },
    {
        "objectId": "BCuEOw3Ena",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "GLE",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "4QggYHUIyn",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "Mercedes-AMG E-Class",
        "category": "Coupe, Convertible, Sedan, Wagon",
        "createdAt": "2020-01-27T20:44:18.114Z",
        "updatedAt": "2020-01-27T20:44:18.114Z"
    },
    {
        "objectId": "9D4m3OYEUX",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "Mercedes-AMG GLE",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "F0DhODCM7e",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "Mercedes-AMG G-Class",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "XhQUUcbvQU",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "Mercedes-AMG GLA",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "kvC18WGUse",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "Mercedes-AMG S-Class",
        "category": "Sedan, Coupe, Convertible",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "P3G4igD2ZY",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "SL",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "p1dozBG19L",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "Mercedes-AMG GT",
        "category": "Coupe, Sedan, Convertible",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "UEIeDeIQPT",
        "year": 2019,
        "make": "Mitsubishi",
        "model": "Mirage G4",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "iXFjpcpeaE",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "Metris Passenger",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "TVEeAZYP5Y",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "Mercedes-AMG GLE Coupe",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "D7fGCgE4nI",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "Mercedes-Maybach S-Class",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "2Ey8fOzE1m",
        "year": 2019,
        "make": "Mitsubishi",
        "model": "Outlander PHEV",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "pd9ucOltfT",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "Mercedes-AMG GLC Coupe",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "WMlA28JnT7",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "Sprinter 2500 Cargo",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "UIuzLQZAo0",
        "year": 2019,
        "make": "MINI",
        "model": "Convertible",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "fETuv1YiL2",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "S-Class",
        "category": "Coupe, Sedan, Convertible",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "xdna1kUoOH",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "Metris Cargo",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "Z2WS2PBACl",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "SLC",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "Xnl6GS9H04",
        "year": 2019,
        "make": "Mitsubishi",
        "model": "Eclipse Cross",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "avkiQ2tyxd",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "Mercedes-AMG SLC",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "B36p3LxUmk",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "Mercedes-AMG GLC",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "9lfqMGUHCi",
        "year": 2019,
        "make": "Nissan",
        "model": "370Z",
        "category": "Coupe, Convertible",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "c3tuoyWXUa",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "Mercedes-AMG SL",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "nK8jPgAsv5",
        "year": 2019,
        "make": "MINI",
        "model": "Hardtop 2 Door",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "d5td8uBpK1",
        "year": 2019,
        "make": "MINI",
        "model": "Countryman",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "EXCkgDW1Sn",
        "year": 2019,
        "make": "Mitsubishi",
        "model": "Mirage",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "hLC6DwKWEA",
        "year": 2019,
        "make": "MINI",
        "model": "Hardtop 4 Door",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "82pK6JIygG",
        "year": 2019,
        "make": "MINI",
        "model": "Clubman",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "flu3j3f93s",
        "year": 2019,
        "make": "Mercedes-Benz",
        "model": "Mercedes-AMG GLS",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "8qjhGZSjOm",
        "year": 2019,
        "make": "Mitsubishi",
        "model": "Outlander",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "RH5RBAZwBc",
        "year": 2019,
        "make": "Nissan",
        "model": "Pathfinder",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "AHRbykKQte",
        "year": 2019,
        "make": "Nissan",
        "model": "TITAN XD Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "LOeIyGRbMG",
        "year": 2019,
        "make": "Nissan",
        "model": "GT-R",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "0O5UhL3HF2",
        "year": 2019,
        "make": "Nissan",
        "model": "NV1500 Cargo",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "KQBVN7UaAh",
        "year": 2019,
        "make": "Nissan",
        "model": "Maxima",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "dFA3uIE85u",
        "year": 2019,
        "make": "Nissan",
        "model": "NV2500 HD Cargo",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "UPr7aou0Sx",
        "year": 2019,
        "make": "Nissan",
        "model": "Altima",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "bhS9PiGJHV",
        "year": 2019,
        "make": "Nissan",
        "model": "Titan Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "TlAKQyIkbO",
        "year": 2019,
        "make": "Porsche",
        "model": "718 Boxster",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "6os4YeVsHU",
        "year": 2019,
        "make": "Nissan",
        "model": "Versa",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "tYzrJsVWcA",
        "year": 2019,
        "make": "Nissan",
        "model": "Frontier King Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "MMDhdhxQqZ",
        "year": 2019,
        "make": "Nissan",
        "model": "Frontier Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "JLdts6ljP9",
        "year": 2019,
        "make": "Nissan",
        "model": "Armada",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "e8NIBDsCYN",
        "year": 2019,
        "make": "Nissan",
        "model": "NV3500 HD Cargo",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "E6QH3Vm5Tq",
        "year": 2019,
        "make": "Nissan",
        "model": "NV200",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "UcFVu1TgBu",
        "year": 2019,
        "make": "Nissan",
        "model": "Rogue Sport",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "rLD7sHPgDk",
        "year": 2019,
        "make": "Mitsubishi",
        "model": "Outlander Sport",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "xNA8b5Aj3n",
        "year": 2019,
        "make": "Nissan",
        "model": "Kicks",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "Ta2eFu22AZ",
        "year": 2019,
        "make": "Nissan",
        "model": "LEAF",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "YOMmYTtV0M",
        "year": 2019,
        "make": "Nissan",
        "model": "Sentra",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "FgGnAG2URD",
        "year": 2019,
        "make": "Nissan",
        "model": "Murano",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "Jn76hGHTNk",
        "year": 2019,
        "make": "Nissan",
        "model": "TITAN Single Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "4JjrP8HEHg",
        "year": 2019,
        "make": "Nissan",
        "model": "NV200 Taxi",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "Ji1dBq4lWF",
        "year": 2019,
        "make": "Nissan",
        "model": "NV3500 HD Passenger",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "jyIWyqezHL",
        "year": 2019,
        "make": "Nissan",
        "model": "Titan King Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "Vp3y6GzYjq",
        "year": 2019,
        "make": "Nissan",
        "model": "Rogue",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.151Z",
        "updatedAt": "2020-01-27T20:44:18.151Z"
    },
    {
        "objectId": "s66LLb7APg",
        "year": 2019,
        "make": "Nissan",
        "model": "TITAN XD Single Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "e4ZGG5Vcmv",
        "year": 2019,
        "make": "Nissan",
        "model": "Versa Note",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "FCpcDEzvNY",
        "year": 2019,
        "make": "Ram",
        "model": "2500 Mega Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "izW2ro6FoT",
        "year": 2019,
        "make": "Nissan",
        "model": "TITAN XD King Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "Lmd4Wcovu8",
        "year": 2019,
        "make": "Porsche",
        "model": "Cayenne",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "xS9WtTtwee",
        "year": 2019,
        "make": "Ram",
        "model": "1500 Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "ZlZQON0xW4",
        "year": 2019,
        "make": "Ram",
        "model": "1500 Classic Quad Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "6MznRAz2MP",
        "year": 2019,
        "make": "Porsche",
        "model": "Macan",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "mKgHhKGm5k",
        "year": 2019,
        "make": "Porsche",
        "model": "911",
        "category": "Coupe, Convertible",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "VE72fFI6BS",
        "year": 2019,
        "make": "Ram",
        "model": "1500 Classic Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "mIBXfoSmXO",
        "year": 2019,
        "make": "Ram",
        "model": "1500 Classic Regular Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "rswlcso7u1",
        "year": 2019,
        "make": "Porsche",
        "model": "Panamera",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "Zpi8vhTFmk",
        "year": 2019,
        "make": "Porsche",
        "model": "718 Cayman",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "vsPxyVeAiX",
        "year": 2019,
        "make": "Ram",
        "model": "1500 Quad Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "qmQ5ZL9lya",
        "year": 2019,
        "make": "Ram",
        "model": "2500 Regular Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "koEuRcrlNw",
        "year": 2019,
        "make": "Ram",
        "model": "3500 Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "od1cEHjoWm",
        "year": 2019,
        "make": "Ram",
        "model": "3500 Mega Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "meJ2Htj5LI",
        "year": 2019,
        "make": "Subaru",
        "model": "Crosstrek",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "SNkP43cu3N",
        "year": 2019,
        "make": "Ram",
        "model": "2500 Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "Pzcj4IUUQX",
        "year": 2019,
        "make": "Ram",
        "model": "ProMaster Cargo Van",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "DLHvHp511g",
        "year": 2019,
        "make": "Ram",
        "model": "ProMaster City",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "O3kJTM0xvB",
        "year": 2019,
        "make": "Ram",
        "model": "ProMaster Window Van",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "chqvhgYgXB",
        "year": 2019,
        "make": "Subaru",
        "model": "WRX",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "SvxW9ktwmb",
        "year": 2019,
        "make": "Subaru",
        "model": "BRZ",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "NXl6FesVCQ",
        "year": 2019,
        "make": "Subaru",
        "model": "Impreza",
        "category": "Sedan, Wagon",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "FDAAV1X9xE",
        "year": 2019,
        "make": "Toyota",
        "model": "4Runner",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "CIYdgrkMj8",
        "year": 2019,
        "make": "Tesla",
        "model": "model X",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "HbMuki1brk",
        "year": 2019,
        "make": "Subaru",
        "model": "Legacy",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "gn4l1GGhWX",
        "year": 2019,
        "make": "Toyota",
        "model": "Corolla Hatchback",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "ZVPgK8THg2",
        "year": 2019,
        "make": "Tesla",
        "model": "model 3",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "Dui3Bb1al2",
        "year": 2019,
        "make": "Subaru",
        "model": "Forester",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "X85VY4sz9b",
        "year": 2019,
        "make": "Toyota",
        "model": "86",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "XsgSevyfG2",
        "year": 2019,
        "make": "Ram",
        "model": "3500 Regular Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "LbuPvBEoE2",
        "year": 2019,
        "make": "Toyota",
        "model": "Land Cruiser",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "AdilSnzaEm",
        "year": 2019,
        "make": "Tesla",
        "model": "model S",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "k4In1FbszX",
        "year": 2019,
        "make": "Subaru",
        "model": "Ascent",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "oVRNcu0Lzc",
        "year": 2019,
        "make": "Toyota",
        "model": "Highlander Hybrid",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "W0ps7ij4vs",
        "year": 2019,
        "make": "Toyota",
        "model": "Camry Hybrid",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "kUCSLkzV2t",
        "year": 2019,
        "make": "Toyota",
        "model": "Highlander",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "wf5Rj6USih",
        "year": 2019,
        "make": "Subaru",
        "model": "Outback",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "GGLd0Zn0Nm",
        "year": 2019,
        "make": "Toyota",
        "model": "Camry",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "co2HJz8Sn8",
        "year": 2019,
        "make": "Toyota",
        "model": "C-HR",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "RMXKjymspD",
        "year": 2019,
        "make": "Toyota",
        "model": "Avalon",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "fJLcpojiYK",
        "year": 2019,
        "make": "Toyota",
        "model": "Corolla",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "xEVRohlzvV",
        "year": 2019,
        "make": "Toyota",
        "model": "Avalon Hybrid",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.152Z",
        "updatedAt": "2020-01-27T20:44:18.152Z"
    },
    {
        "objectId": "xmW8e7v1lr",
        "year": 2019,
        "make": "Toyota",
        "model": "Mirai",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.189Z",
        "updatedAt": "2020-01-27T20:44:18.189Z"
    },
    {
        "objectId": "dlx7ppvsVs",
        "year": 2019,
        "make": "Toyota",
        "model": "RAV4",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.189Z",
        "updatedAt": "2020-01-27T20:44:18.189Z"
    },
    {
        "objectId": "xc7eYLH12b",
        "year": 2019,
        "make": "Toyota",
        "model": "Prius",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.189Z",
        "updatedAt": "2020-01-27T20:44:18.189Z"
    },
    {
        "objectId": "peZKc66VvO",
        "year": 2019,
        "make": "Toyota",
        "model": "Yaris",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.189Z",
        "updatedAt": "2020-01-27T20:44:18.189Z"
    },
    {
        "objectId": "ltIIaE5lg1",
        "year": 2019,
        "make": "Toyota",
        "model": "Tundra CrewMax",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.189Z",
        "updatedAt": "2020-01-27T20:44:18.189Z"
    },
    {
        "objectId": "u7mLdbNjkQ",
        "year": 2019,
        "make": "Volkswagen",
        "model": "Atlas",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.189Z",
        "updatedAt": "2020-01-27T20:44:18.189Z"
    },
    {
        "objectId": "OPXs3pkN3x",
        "year": 2019,
        "make": "Toyota",
        "model": "RAV4 Hybrid",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.189Z",
        "updatedAt": "2020-01-27T20:44:18.189Z"
    },
    {
        "objectId": "Hi1yuex1ks",
        "year": 2019,
        "make": "Toyota",
        "model": "Sequoia",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.189Z",
        "updatedAt": "2020-01-27T20:44:18.189Z"
    },
    {
        "objectId": "ExNrnZNQDs",
        "year": 2019,
        "make": "Toyota",
        "model": "Prius c",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.189Z",
        "updatedAt": "2020-01-27T20:44:18.189Z"
    },
    {
        "objectId": "YBKmhGSCV6",
        "year": 2019,
        "make": "Toyota",
        "model": "Tundra Double Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.189Z",
        "updatedAt": "2020-01-27T20:44:18.189Z"
    },
    {
        "objectId": "sN7vn88WKl",
        "year": 2019,
        "make": "Toyota",
        "model": "Tacoma Access Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.189Z",
        "updatedAt": "2020-01-27T20:44:18.189Z"
    },
    {
        "objectId": "x9ekz5gQsH",
        "year": 2019,
        "make": "Toyota",
        "model": "Prius Prime",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.189Z",
        "updatedAt": "2020-01-27T20:44:18.189Z"
    },
    {
        "objectId": "9WjoZVwfFq",
        "year": 2019,
        "make": "Toyota",
        "model": "Tacoma Double Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.189Z",
        "updatedAt": "2020-01-27T20:44:18.189Z"
    },
    {
        "objectId": "m7AwpjhiaF",
        "year": 2019,
        "make": "Toyota",
        "model": "Sienna",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.189Z",
        "updatedAt": "2020-01-27T20:44:18.189Z"
    },
    {
        "objectId": "5kvP2xK8Zc",
        "year": 2019,
        "make": "Volkswagen",
        "model": "Golf SportWagen",
        "category": "Wagon",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "Db6o9U8okD",
        "year": 2019,
        "make": "Volkswagen",
        "model": "Arteon",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.189Z",
        "updatedAt": "2020-01-27T20:44:18.189Z"
    },
    {
        "objectId": "avOzuU86Jj",
        "year": 2019,
        "make": "Volkswagen",
        "model": "Jetta",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "034oz07gym",
        "year": 2019,
        "make": "Volkswagen",
        "model": "Passat",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "ke58pHKolD",
        "year": 2019,
        "make": "Volkswagen",
        "model": "e-Golf",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "YQn0OjR3Vp",
        "year": 2019,
        "make": "Volkswagen",
        "model": "Golf",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "6ChyG6YM2k",
        "year": 2019,
        "make": "Volkswagen",
        "model": "Golf GTI",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "CYrYkmY6sr",
        "year": 2019,
        "make": "Volkswagen",
        "model": "Jetta GLI",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "FvhWSFBPSW",
        "year": 2019,
        "make": "Volkswagen",
        "model": "Beetle",
        "category": "Convertible, Coupe, Hatchback",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "8FK5i4ePZE",
        "year": 2019,
        "make": "Volkswagen",
        "model": "Golf Alltrack",
        "category": "Wagon",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "oj5i9vdux2",
        "year": 2019,
        "make": "Volvo",
        "model": "S60",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "zklkaxQKUZ",
        "year": 2019,
        "make": "Volkswagen",
        "model": "Golf R",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "sNvgoWPkFR",
        "year": 2019,
        "make": "Volvo",
        "model": "V60",
        "category": "Wagon",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "sm6PndVB2o",
        "year": 2019,
        "make": "Volvo",
        "model": "V90",
        "category": "Wagon",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "HCcRgrdeZe",
        "year": 2019,
        "make": "Volvo",
        "model": "S90",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "TPPFTAECEX",
        "year": 2019,
        "make": "Volvo",
        "model": "XC90",
        "category": "SUV2020",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "FXcHFwaHzo",
        "year": 2019,
        "make": "Volkswagen",
        "model": "Tiguan",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "hqczihz66a",
        "year": 2019,
        "make": "Volvo",
        "model": "XC60",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "Kb9b2493oy",
        "year": 2019,
        "make": "Volvo",
        "model": "XC40",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "viau0hB7Ia",
        "year": 2018,
        "make": "Acura",
        "model": "ILX",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "GKX8PHDvBx",
        "year": 2018,
        "make": "Alfa Romeo",
        "model": "4C Spider",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "JJoNEtHXQ4",
        "year": 2018,
        "make": "Acura",
        "model": "RLX",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "3Fep0ntHSg",
        "year": 2018,
        "make": "Acura",
        "model": "TLX",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "rwdOGxYYPw",
        "year": 2018,
        "make": "Aston Martin",
        "model": "Vanquish S",
        "category": "Convertible, Coupe",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "shtDFvCuiL",
        "year": 2018,
        "make": "Acura",
        "model": "MDX",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "wgASSTTaW3",
        "year": 2018,
        "make": "Audi",
        "model": "Q3",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "nOwbBojNYK",
        "year": 2018,
        "make": "Audi",
        "model": "A3",
        "category": "Sedan, Convertible",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "8D84lJZhZV",
        "year": 2018,
        "make": "Acura",
        "model": "RLX Sport Hybrid",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "eSrBpgc1NL",
        "year": 2018,
        "make": "Alfa Romeo",
        "model": "Giulia",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "s7EVRxkGTP",
        "year": 2018,
        "make": "Alfa Romeo",
        "model": "4C",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "Y2HL8TewJ9",
        "year": 2018,
        "make": "Aston Martin",
        "model": "DB11",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "6Uiz6dMgqS",
        "year": 2018,
        "make": "Acura",
        "model": "RDX",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "5w6TZeReGG",
        "year": 2018,
        "make": "Acura",
        "model": "MDX Sport Hybrid",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "441nZueeVx",
        "year": 2018,
        "make": "Audi",
        "model": "A7",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "jiBex5KVlh",
        "year": 2018,
        "make": "Audi",
        "model": "A4 allroad",
        "category": "Wagon",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "w9BmUI3wPC",
        "year": 2018,
        "make": "Audi",
        "model": "A4",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "ne1W06dL3N",
        "year": 2018,
        "make": "Acura",
        "model": "NSX",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "DGqqE0kSiF",
        "year": 2018,
        "make": "Alfa Romeo",
        "model": "Stelvio",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "w7Qncq7J7n",
        "year": 2018,
        "make": "Audi",
        "model": "Q5",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "yxjMgpPVad",
        "year": 2018,
        "make": "Audi",
        "model": "A3 Sportback e-tron",
        "category": "Wagon",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "fmwuVnxBPP",
        "year": 2018,
        "make": "Audi",
        "model": "A5",
        "category": "Coupe, Convertible, Sedan",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "66ku02fxQg",
        "year": 2018,
        "make": "Audi",
        "model": "A6",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "8FqD6NCKpe",
        "year": 2018,
        "make": "Audi",
        "model": "R8",
        "category": "Coupe, Convertible",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "q9XVay5Bi9",
        "year": 2018,
        "make": "Audi",
        "model": "A8",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "TKGuD9jstt",
        "year": 2018,
        "make": "Audi",
        "model": "Q7",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "vx4w74rTdN",
        "year": 2018,
        "make": "Audi",
        "model": "RS 3",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "cnpdvzbdDU",
        "year": 2018,
        "make": "Audi",
        "model": "S4",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "WiLT2nSA4G",
        "year": 2018,
        "make": "Audi",
        "model": "SQ5",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "tRbg6DYlay",
        "year": 2018,
        "make": "Audi",
        "model": "S3",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "z61GF2cEzY",
        "year": 2018,
        "make": "Audi",
        "model": "S7",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "9z1mZy20m0",
        "year": 2018,
        "make": "Audi",
        "model": "S6",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "0sEUfGvYoW",
        "year": 2018,
        "make": "Audi",
        "model": "S8",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "KKkMJW7Zvl",
        "year": 2018,
        "make": "Audi",
        "model": "RS 7",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "HKAzghyQuH",
        "year": 2018,
        "make": "Audi",
        "model": "RS 5",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "LK74snt95U",
        "year": 2018,
        "make": "Audi",
        "model": "TT",
        "category": "Coupe, Convertible",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "zHcKYFiwyp",
        "year": 2018,
        "make": "Audi",
        "model": "S5",
        "category": "Sedan, Coupe, Convertible",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "GES6H2ShQl",
        "year": 2018,
        "make": "Bentley",
        "model": "Bentayga",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "mM4B5heV67",
        "year": 2018,
        "make": "BMW",
        "model": "4 Series",
        "category": "Coupe, Sedan, Convertible",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "5AFW5iBv2Q",
        "year": 2018,
        "make": "BMW",
        "model": "M5",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "NugsOI2rZM",
        "year": 2018,
        "make": "BMW",
        "model": "2 Series",
        "category": "Coupe, Convertible",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "csCuxWTFKK",
        "year": 2018,
        "make": "BMW",
        "model": "M4",
        "category": "Convertible, Coupe",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "IoJn5ML0JF",
        "year": 2018,
        "make": "BMW",
        "model": "X3",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "SLYFpQdCVH",
        "year": 2018,
        "make": "BMW",
        "model": "7 Series",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "r8pTsPLrBZ",
        "year": 2018,
        "make": "BMW",
        "model": "6 Series",
        "category": "Sedan, Convertible",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "ey8tV6HOnP",
        "year": 2018,
        "make": "Bentley",
        "model": "Flying Spur",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "WHCTL8PKc2",
        "year": 2018,
        "make": "BMW",
        "model": "M3",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "MDE6nmecu4",
        "year": 2018,
        "make": "Bentley",
        "model": "Continental",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "qcTVsCBh0q",
        "year": 2018,
        "make": "BMW",
        "model": "M6",
        "category": "Coupe, Convertible",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "qVcvN1zRhy",
        "year": 2018,
        "make": "Buick",
        "model": "Cascada",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:18.191Z",
        "updatedAt": "2020-01-27T20:44:18.191Z"
    },
    {
        "objectId": "ewjhKFvF7e",
        "year": 2018,
        "make": "BMW",
        "model": "3 Series",
        "category": "Sedan, Wagon",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "564HCAqc8b",
        "year": 2018,
        "make": "Bentley",
        "model": "Mulsanne",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "RCFP67b3zX",
        "year": 2018,
        "make": "BMW",
        "model": "X2",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "7lhDxlD64f",
        "year": 2018,
        "make": "BMW",
        "model": "X5 M",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "bhTOHFX3Aq",
        "year": 2018,
        "make": "BMW",
        "model": "X6",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "M7NOSafNKM",
        "year": 2018,
        "make": "BMW",
        "model": "i3",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "5BnExW6a0m",
        "year": 2018,
        "make": "BMW",
        "model": "M2",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "9b5ac931VQ",
        "year": 2018,
        "make": "BMW",
        "model": "X4",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "STFJGPIMfc",
        "year": 2018,
        "make": "BMW",
        "model": "X5",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "kILs3F7glw",
        "year": 2018,
        "make": "BMW",
        "model": "X1",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "FHsxAkFm1p",
        "year": 2018,
        "make": "Buick",
        "model": "Enclave",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.191Z",
        "updatedAt": "2020-01-27T20:44:18.191Z"
    },
    {
        "objectId": "JBoU1QdhWb",
        "year": 2018,
        "make": "Buick",
        "model": "Envision",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.191Z",
        "updatedAt": "2020-01-27T20:44:18.191Z"
    },
    {
        "objectId": "2g32TNSk3M",
        "year": 2018,
        "make": "BMW",
        "model": "5 Series",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.190Z",
        "updatedAt": "2020-01-27T20:44:18.190Z"
    },
    {
        "objectId": "Dfp5ZdLTfi",
        "year": 2018,
        "make": "Buick",
        "model": "LaCrosse",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.191Z",
        "updatedAt": "2020-01-27T20:44:18.191Z"
    },
    {
        "objectId": "H1c0ZiRjTo",
        "year": 2018,
        "make": "Buick",
        "model": "Encore",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.191Z",
        "updatedAt": "2020-01-27T20:44:18.191Z"
    },
    {
        "objectId": "5vfTHvvdBq",
        "year": 2018,
        "make": "BMW",
        "model": "X6 M",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.191Z",
        "updatedAt": "2020-01-27T20:44:18.191Z"
    },
    {
        "objectId": "LiLyrjJE4S",
        "year": 2018,
        "make": "Buick",
        "model": "Regal Sportback",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.191Z",
        "updatedAt": "2020-01-27T20:44:18.191Z"
    },
    {
        "objectId": "Aq6KnFE3gG",
        "year": 2018,
        "make": "Buick",
        "model": "Regal TourX",
        "category": "Wagon",
        "createdAt": "2020-01-27T20:44:18.223Z",
        "updatedAt": "2020-01-27T20:44:18.223Z"
    },
    {
        "objectId": "oCD9gkzyMP",
        "year": 2018,
        "make": "Cadillac",
        "model": "CT6",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.223Z",
        "updatedAt": "2020-01-27T20:44:18.223Z"
    },
    {
        "objectId": "JiI89jzbbZ",
        "year": 2018,
        "make": "Cadillac",
        "model": "CTS",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.223Z",
        "updatedAt": "2020-01-27T20:44:18.223Z"
    },
    {
        "objectId": "wnzE70fl3g",
        "year": 2018,
        "make": "Cadillac",
        "model": "ATS-V",
        "category": "Coupe, Sedan",
        "createdAt": "2020-01-27T20:44:18.223Z",
        "updatedAt": "2020-01-27T20:44:18.223Z"
    },
    {
        "objectId": "2bHTkACtqd",
        "year": 2018,
        "make": "Chevrolet",
        "model": "Colorado Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.223Z",
        "updatedAt": "2020-01-27T20:44:18.223Z"
    },
    {
        "objectId": "PTMJejSnli",
        "year": 2018,
        "make": "Chevrolet",
        "model": "Bolt EV",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.223Z",
        "updatedAt": "2020-01-27T20:44:18.223Z"
    },
    {
        "objectId": "JMZlDGP5sW",
        "year": 2018,
        "make": "Chevrolet",
        "model": "Camaro",
        "category": "Coupe, Convertible",
        "createdAt": "2020-01-27T20:44:18.223Z",
        "updatedAt": "2020-01-27T20:44:18.223Z"
    },
    {
        "objectId": "tHS3yRT9KM",
        "year": 2018,
        "make": "Chevrolet",
        "model": "Express 2500 Passenger",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.223Z",
        "updatedAt": "2020-01-27T20:44:18.223Z"
    },
    {
        "objectId": "c5WrM30eA5",
        "year": 2018,
        "make": "Cadillac",
        "model": "ATS",
        "category": "Coupe, Sedan",
        "createdAt": "2020-01-27T20:44:18.223Z",
        "updatedAt": "2020-01-27T20:44:18.223Z"
    },
    {
        "objectId": "dKsI1UGvkl",
        "year": 2018,
        "make": "Chevrolet",
        "model": "Colorado Extended Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.223Z",
        "updatedAt": "2020-01-27T20:44:18.223Z"
    },
    {
        "objectId": "dQauHB7BZA",
        "year": 2018,
        "make": "Cadillac",
        "model": "CTS-V",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.223Z",
        "updatedAt": "2020-01-27T20:44:18.223Z"
    },
    {
        "objectId": "4iB6GjV4PM",
        "year": 2018,
        "make": "Cadillac",
        "model": "Escalade ESV",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.223Z",
        "updatedAt": "2020-01-27T20:44:18.223Z"
    },
    {
        "objectId": "VG2MA3kJoR",
        "year": 2018,
        "make": "Cadillac",
        "model": "XT5",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.223Z",
        "updatedAt": "2020-01-27T20:44:18.223Z"
    },
    {
        "objectId": "GmpgWc6mQm",
        "year": 2018,
        "make": "Cadillac",
        "model": "XTS",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.223Z",
        "updatedAt": "2020-01-27T20:44:18.223Z"
    },
    {
        "objectId": "VkYSUG36ct",
        "year": 2018,
        "make": "Cadillac",
        "model": "Escalade",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.223Z",
        "updatedAt": "2020-01-27T20:44:18.223Z"
    },
    {
        "objectId": "0WOdFvimkc",
        "year": 2018,
        "make": "Chevrolet",
        "model": "City Express",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.223Z",
        "updatedAt": "2020-01-27T20:44:18.223Z"
    },
    {
        "objectId": "Aa5Ug2XCV8",
        "year": 2018,
        "make": "Chevrolet",
        "model": "Cruze",
        "category": "Sedan, Hatchback",
        "createdAt": "2020-01-27T20:44:18.223Z",
        "updatedAt": "2020-01-27T20:44:18.223Z"
    },
    {
        "objectId": "9HAKZl6VSz",
        "year": 2018,
        "make": "Chevrolet",
        "model": "Spark",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "VWhNAWo595",
        "year": 2018,
        "make": "Chevrolet",
        "model": "Silverado 1500 Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "Rk9Thdn5wS",
        "year": 2018,
        "make": "Chevrolet",
        "model": "Express 3500 Passenger",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.223Z",
        "updatedAt": "2020-01-27T20:44:18.223Z"
    },
    {
        "objectId": "pSFjiTA212",
        "year": 2018,
        "make": "Chevrolet",
        "model": "Equinox",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.223Z",
        "updatedAt": "2020-01-27T20:44:18.223Z"
    },
    {
        "objectId": "d2CoI8LQfv",
        "year": 2018,
        "make": "Chevrolet",
        "model": "Silverado 1500 Regular Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "POZN1XSxHy",
        "year": 2018,
        "make": "Chevrolet",
        "model": "Express 2500 Cargo",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.223Z",
        "updatedAt": "2020-01-27T20:44:18.223Z"
    },
    {
        "objectId": "VFXY0b17Qc",
        "year": 2018,
        "make": "Chevrolet",
        "model": "Silverado 2500 HD Regular Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "IQVkYJPWFB",
        "year": 2018,
        "make": "Chevrolet",
        "model": "Silverado 3500 HD Double Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "UlFmsOgek7",
        "year": 2018,
        "make": "Chevrolet",
        "model": "Corvette",
        "category": "Coupe, Convertible",
        "createdAt": "2020-01-27T20:44:18.223Z",
        "updatedAt": "2020-01-27T20:44:18.223Z"
    },
    {
        "objectId": "DAEHdqzkuq",
        "year": 2018,
        "make": "Chevrolet",
        "model": "Impala",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "T8LPOJC5Oz",
        "year": 2018,
        "make": "Chevrolet",
        "model": "Express 3500 Cargo",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.223Z",
        "updatedAt": "2020-01-27T20:44:18.223Z"
    },
    {
        "objectId": "HBhdbUbfFI",
        "year": 2018,
        "make": "Chevrolet",
        "model": "Malibu",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "dscD6Lym03",
        "year": 2018,
        "make": "Chevrolet",
        "model": "Silverado 2500 HD Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "ciNhUeuz42",
        "year": 2018,
        "make": "Chevrolet",
        "model": "Silverado 2500 HD Double Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "CCuwpwKxsR",
        "year": 2018,
        "make": "Chevrolet",
        "model": "Sonic",
        "category": "Sedan, Hatchback",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "Dx7Qbl91QX",
        "year": 2018,
        "make": "Chrysler",
        "model": "300",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "vNbwhfeLcT",
        "year": 2018,
        "make": "Chevrolet",
        "model": "Traverse",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "6HhtUcNAjp",
        "year": 2018,
        "make": "Dodge",
        "model": "Grand Caravan Passenger",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "HZK0iPO4QD",
        "year": 2018,
        "make": "Chrysler",
        "model": "Pacifica",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "uijnKgJQQp",
        "year": 2018,
        "make": "Chevrolet",
        "model": "Silverado 1500 Double Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "nRyZhGcLr6",
        "year": 2018,
        "make": "Chevrolet",
        "model": "Silverado 3500 HD Regular Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "AWtp1E4Fo0",
        "year": 2018,
        "make": "Dodge",
        "model": "Journey",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "JBRQ26Fty0",
        "year": 2018,
        "make": "Chevrolet",
        "model": "Trax",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "24BQh3HE8D",
        "year": 2018,
        "make": "Chevrolet",
        "model": "Suburban",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "ba3Lu6UyC1",
        "year": 2018,
        "make": "Chevrolet",
        "model": "Silverado 3500 HD Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "Av4qV2MDZI",
        "year": 2018,
        "make": "Ferrari",
        "model": "GTC4Lusso",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "b666pls3W2",
        "year": 2018,
        "make": "Ferrari",
        "model": "488 GTB",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "cN9lyunFxJ",
        "year": 2018,
        "make": "Chrysler",
        "model": "Pacifica Hybrid",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "jC5guSNtRx",
        "year": 2018,
        "make": "Chevrolet",
        "model": "Suburban 3500HD",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "F2NcrHnQfJ",
        "year": 2018,
        "make": "Dodge",
        "model": "Durango",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "HxQ90VuHAk",
        "year": 2018,
        "make": "Dodge",
        "model": "Challenger",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "yJOFJ8DYq3",
        "year": 2018,
        "make": "Chevrolet",
        "model": "Volt",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "DJdO3unaAb",
        "year": 2018,
        "make": "FIAT",
        "model": "124 Spider",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "RJX5JHYazW",
        "year": 2018,
        "make": "Chevrolet",
        "model": "Tahoe",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "82TPVo6AN4",
        "year": 2018,
        "make": "Dodge",
        "model": "Charger",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "Fjn4JM5vjG",
        "year": 2018,
        "make": "Ferrari",
        "model": "812 Superfast",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "y5egbhDKTu",
        "year": 2018,
        "make": "Ferrari",
        "model": "Portofino",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "2pLxFm6sw9",
        "year": 2018,
        "make": "FIAT",
        "model": "500e",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "WZDaa3cuBD",
        "year": 2018,
        "make": "FIAT",
        "model": "500 Abarth",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "UFV0L1GlaY",
        "year": 2018,
        "make": "Ferrari",
        "model": "488 Spider",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "hfjbFWGnGs",
        "year": 2018,
        "make": "FIAT",
        "model": "500c",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "KaM1tiAz4H",
        "year": 2018,
        "make": "FIAT",
        "model": "500",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "yuOq3xGffK",
        "year": 2018,
        "make": "Ford",
        "model": "F150 Regular Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "JwRGXvkfPa",
        "year": 2018,
        "make": "Ford",
        "model": "Edge",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "Pw9EDCDQal",
        "year": 2018,
        "make": "FIAT",
        "model": "500c Abarth",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "POoN03bSpA",
        "year": 2018,
        "make": "Ford",
        "model": "Escape",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "f1z5JBwxxE",
        "year": 2018,
        "make": "Ford",
        "model": "C-MAX Hybrid",
        "category": "Wagon",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "URAFvzOIqj",
        "year": 2018,
        "make": "Ford",
        "model": "Expedition MAX",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "u1GUIKMkGN",
        "year": 2018,
        "make": "Ford",
        "model": "F150 SuperCrew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "NOKLUeMhCH",
        "year": 2018,
        "make": "Ford",
        "model": "F350 Super Duty Super Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "TnnuMv2Uww",
        "year": 2018,
        "make": "Ford",
        "model": "F250 Super Duty Super Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "7hnKvkUXLN",
        "year": 2018,
        "make": "FIAT",
        "model": "500L",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "4A5EUnGbL4",
        "year": 2018,
        "make": "FIAT",
        "model": "500X",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "N2DRCB4w9n",
        "year": 2018,
        "make": "Ford",
        "model": "Expedition",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "ZVx0ht7hCa",
        "year": 2018,
        "make": "Ford",
        "model": "F350 Super Duty Regular Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "r22g5EB55R",
        "year": 2018,
        "make": "Ford",
        "model": "F250 Super Duty Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "2Fw9wsF3h7",
        "year": 2018,
        "make": "Ford",
        "model": "EcoSport",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "0LNJ7IheBu",
        "year": 2018,
        "make": "Ford",
        "model": "F150 Super Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "zq27O3vdPR",
        "year": 2018,
        "make": "Ford",
        "model": "Explorer",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "yusRr6gaUV",
        "year": 2018,
        "make": "Ford",
        "model": "Fiesta",
        "category": "Hatchback, Sedan",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "HRFhzrNDJF",
        "year": 2018,
        "make": "Ford",
        "model": "F250 Super Duty Regular Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "nrFxLqKK7L",
        "year": 2018,
        "make": "Ford",
        "model": "F350 Super Duty Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "nxC1KJrZcE",
        "year": 2018,
        "make": "Ford",
        "model": "Transit 350 Wagon",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "Hmw7uNlB36",
        "year": 2018,
        "make": "Ford",
        "model": "Fusion",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "RxDCDafVpX",
        "year": 2018,
        "make": "Ford",
        "model": "Transit 150 Wagon",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "jkqFmiaCvK",
        "year": 2018,
        "make": "Ford",
        "model": "F450 Super Duty Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "cd1gAHGlPt",
        "year": 2018,
        "make": "Ford",
        "model": "Transit 150 Van",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "fhFPkwhFBs",
        "year": 2018,
        "make": "Ford",
        "model": "Focus",
        "category": "Sedan, Hatchback",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "lzD3jJMq7L",
        "year": 2018,
        "make": "Ford",
        "model": "Transit Connect Cargo",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "8u25fVgAcG",
        "year": 2018,
        "make": "Ford",
        "model": "Transit 350 HD Van",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "TWUdPiMBop",
        "year": 2018,
        "make": "Ford",
        "model": "Fusion Energi",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "rrGcG3fhKP",
        "year": 2018,
        "make": "Ford",
        "model": "Flex",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "QcC95oEiO9",
        "year": 2018,
        "make": "Ford",
        "model": "Mustang",
        "category": "Convertible, Coupe",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "X5KwgjdJdL",
        "year": 2018,
        "make": "Freightliner",
        "model": "Sprinter 2500 Cargo",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "bcyzzOTY25",
        "year": 2018,
        "make": "Freightliner",
        "model": "Sprinter 2500 Crew",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "TpTfs7FhZM",
        "year": 2018,
        "make": "Ford",
        "model": "Transit 250 Van",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "SWmRwNJ6bs",
        "year": 2018,
        "make": "Freightliner",
        "model": "Sprinter 3500 Cargo",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "V2y0j1qYEg",
        "year": 2018,
        "make": "Ford",
        "model": "Transit Connect Passenger",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "mPnGySGvim",
        "year": 2018,
        "make": "Ford",
        "model": "Transit 350 Van",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "byVFgA6w0s",
        "year": 2018,
        "make": "Freightliner",
        "model": "Sprinter WORKER Cargo",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "prirULRvja",
        "year": 2018,
        "make": "Ford",
        "model": "Taurus",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "KNvWDJlF4g",
        "year": 2018,
        "make": "Freightliner",
        "model": "Sprinter 3500XD Cargo",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "tHFcBu0jsM",
        "year": 2018,
        "make": "Freightliner",
        "model": "Sprinter 2500 Passenger",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.224Z",
        "updatedAt": "2020-01-27T20:44:18.224Z"
    },
    {
        "objectId": "g6wM0sUJWQ",
        "year": 2018,
        "make": "GMC",
        "model": "Acadia",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "GMo1UeoVxV",
        "year": 2018,
        "make": "Genesis",
        "model": "G80",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "KHc3CODz22",
        "year": 2018,
        "make": "GMC",
        "model": "Sierra 1500 Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "mgAoFYL6Id",
        "year": 2018,
        "make": "GMC",
        "model": "Canyon Extended Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "mHSpgef4EU",
        "year": 2018,
        "make": "Genesis",
        "model": "G90",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "44TJgUJVbi",
        "year": 2018,
        "make": "GMC",
        "model": "Savana 2500 Passenger",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "syJN6LG1nk",
        "year": 2018,
        "make": "GMC",
        "model": "Savana 3500 Passenger",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "iz4GtVtW8V",
        "year": 2018,
        "make": "GMC",
        "model": "Canyon Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "DJe6LpHBAa",
        "year": 2018,
        "make": "GMC",
        "model": "Savana 3500 Cargo",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "ZF0GPDg7q5",
        "year": 2018,
        "make": "GMC",
        "model": "Sierra 3500 HD Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "NziqnF5SBr",
        "year": 2018,
        "make": "GMC",
        "model": "Sierra 2500 HD Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "Ce12LoKBaF",
        "year": 2018,
        "make": "GMC",
        "model": "Savana 2500 Cargo",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "7Ankvqkv6U",
        "year": 2018,
        "make": "GMC",
        "model": "Sierra 2500 HD Double Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "4I08Y9dPG9",
        "year": 2018,
        "make": "GMC",
        "model": "Sierra 3500 HD Double Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "pNWpjRuCAs",
        "year": 2018,
        "make": "Honda",
        "model": "Accord",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "rMYRXXYnLJ",
        "year": 2018,
        "make": "GMC",
        "model": "Terrain",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "4HDyTAIFBY",
        "year": 2018,
        "make": "GMC",
        "model": "Sierra 2500 HD Regular Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "2sQKnDDYce",
        "year": 2018,
        "make": "GMC",
        "model": "Yukon",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "j0p21FlO2s",
        "year": 2018,
        "make": "GMC",
        "model": "Sierra 1500 Regular Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "mD2MZMNHOC",
        "year": 2018,
        "make": "GMC",
        "model": "Sierra 1500 Double Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "4xPv6HLmlu",
        "year": 2018,
        "make": "Honda",
        "model": "Accord Hybrid",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "9u8e6hDe2M",
        "year": 2018,
        "make": "GMC",
        "model": "Sierra 3500 HD Regular Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "eqpFeJkV0D",
        "year": 2018,
        "make": "Honda",
        "model": "Civic Type R",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "01GwQ6QBez",
        "year": 2018,
        "make": "Hyundai",
        "model": "Santa Fe Sport",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "cVnGm4zBkm",
        "year": 2018,
        "make": "Hyundai",
        "model": "Ioniq Hybrid",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "HEvRl2s5DK",
        "year": 2018,
        "make": "Honda",
        "model": "HR-V",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "bz1UviDA0k",
        "year": 2018,
        "make": "Honda",
        "model": "Fit",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "ObuWr7fUpl",
        "year": 2018,
        "make": "Honda",
        "model": "Civic",
        "category": "Coupe, Hatchback, Sedan",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "eOu6B2kFwT",
        "year": 2018,
        "make": "GMC",
        "model": "Yukon XL",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "pgdfgiKfHe",
        "year": 2018,
        "make": "Hyundai",
        "model": "Ioniq Plug-in Hybrid",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "U36RN6d0hy",
        "year": 2018,
        "make": "Hyundai",
        "model": "Ioniq Electric",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "wmyoHHiqbF",
        "year": 2018,
        "make": "Honda",
        "model": "Clarity Plug-in Hybrid",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "EMsemD6OcE",
        "year": 2018,
        "make": "Hyundai",
        "model": "Elantra GT",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "ARRZafogEO",
        "year": 2018,
        "make": "Hyundai",
        "model": "Accent",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "zIQYz8XCrR",
        "year": 2018,
        "make": "Honda",
        "model": "Clarity Fuel Cell",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "kNdOvLJXP0",
        "year": 2018,
        "make": "Honda",
        "model": "Pilot",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "v842CRX8Fb",
        "year": 2018,
        "make": "Honda",
        "model": "Odyssey",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "j70pie4Kgy",
        "year": 2018,
        "make": "Hyundai",
        "model": "Sonata Hybrid",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "nZ89PWUp2Z",
        "year": 2018,
        "make": "Honda",
        "model": "CR-V",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "UG8AYLQGM0",
        "year": 2018,
        "make": "Honda",
        "model": "Clarity Electric",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "5zk3Cil3XK",
        "year": 2018,
        "make": "Honda",
        "model": "Ridgeline",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.262Z",
        "updatedAt": "2020-01-27T20:44:18.262Z"
    },
    {
        "objectId": "GsIgLBHdwz",
        "year": 2018,
        "make": "INFINITI",
        "model": "Q50",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "QrycbjekQr",
        "year": 2018,
        "make": "Hyundai",
        "model": "Elantra",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "mOMrWLck3g",
        "year": 2018,
        "make": "Jeep",
        "model": "Renegade",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "sgHr1E5RuF",
        "year": 2018,
        "make": "INFINITI",
        "model": "QX60",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "ssP2PEk3g0",
        "year": 2018,
        "make": "Hyundai",
        "model": "Santa Fe",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "CUyaNnH5fe",
        "year": 2018,
        "make": "Hyundai",
        "model": "Sonata Plug-in Hybrid",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "u2rkoXCc5t",
        "year": 2018,
        "make": "Jaguar",
        "model": "F-PACE",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "8IYnsmyz0p",
        "year": 2018,
        "make": "Hyundai",
        "model": "Sonata",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "V0RvN5c0pA",
        "year": 2018,
        "make": "Jaguar",
        "model": "XF",
        "category": "Sedan, Wagon",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "MLlUHlEt8G",
        "year": 2018,
        "make": "Jaguar",
        "model": "XJ",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "kCzBlYEWLx",
        "year": 2018,
        "make": "INFINITI",
        "model": "QX80",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "o9o7dYXTrF",
        "year": 2018,
        "make": "Hyundai",
        "model": "Tucson",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "cc6YkZYa9b",
        "year": 2018,
        "make": "INFINITI",
        "model": "Q60",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "iwPlRJLaeM",
        "year": 2018,
        "make": "Jaguar",
        "model": "E-PACE",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "kpQWwpRPqK",
        "year": 2018,
        "make": "INFINITI",
        "model": "Q70",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "tSz4eSOjAr",
        "year": 2018,
        "make": "Hyundai",
        "model": "Kona",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "bxmj5uRvZZ",
        "year": 2018,
        "make": "Jaguar",
        "model": "XE",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "gFKkv8mUuG",
        "year": 2018,
        "make": "Jeep",
        "model": "Wrangler Unlimited",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "mFwiR5HAQP",
        "year": 2018,
        "make": "Jeep",
        "model": "Cherokee",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "VhNo0fmgw5",
        "year": 2018,
        "make": "Jaguar",
        "model": "F-TYPE",
        "category": "Convertible, Coupe",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "91YQzL1DJT",
        "year": 2018,
        "make": "Kia",
        "model": "Sorento",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "5a3RBBhlao",
        "year": 2018,
        "make": "Kia",
        "model": "Forte5",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "sQFsviHVSh",
        "year": 2018,
        "make": "Kia",
        "model": "Optima Hybrid",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "IHiL65lDrQ",
        "year": 2018,
        "make": "Kia",
        "model": "Forte",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "7pUwvQCBFo",
        "year": 2018,
        "make": "Kia",
        "model": "Cadenza",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "aSvuYTBVa6",
        "year": 2018,
        "make": "Jeep",
        "model": "Wrangler",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "9R1pZTW02Y",
        "year": 2018,
        "make": "Kia",
        "model": "Soul EV",
        "category": "Wagon",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "6GwU4IUwBs",
        "year": 2018,
        "make": "Jeep",
        "model": "Grand Cherokee",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "txwfyKQSp9",
        "year": 2018,
        "make": "Kia",
        "model": "Niro Plug-in Hybrid",
        "category": "Wagon",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "yCOUW8AiiP",
        "year": 2018,
        "make": "Lexus",
        "model": "LX",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "gvgmGxsj0e",
        "year": 2018,
        "make": "INFINITI",
        "model": "QX30",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "kD2qyNpxf0",
        "year": 2018,
        "make": "Kia",
        "model": "Optima Plug-in Hybrid",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "L7TWxCvHEG",
        "year": 2018,
        "make": "Kia",
        "model": "Soul",
        "category": "Wagon",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "OVAcu6hi9v",
        "year": 2018,
        "make": "Land Rover",
        "model": "Discovery",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "F6EKToMu6r",
        "year": 2018,
        "make": "Kia",
        "model": "Stinger",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "JA8OR6EIYv",
        "year": 2018,
        "make": "Kia",
        "model": "Sedona",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "TD5F16yzDp",
        "year": 2018,
        "make": "Lexus",
        "model": "GS",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "LTQwRg5t87",
        "year": 2018,
        "make": "Jeep",
        "model": "Compass",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "pBzUQ3LfMm",
        "year": 2018,
        "make": "Land Rover",
        "model": "Range Rover Velar",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "fXSIzKY7v7",
        "year": 2018,
        "make": "Land Rover",
        "model": "Range Rover",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "lHsPHcslEx",
        "year": 2018,
        "make": "Kia",
        "model": "Sportage",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "N1ShBZcDxF",
        "year": 2018,
        "make": "Kia",
        "model": "Niro",
        "category": "Wagon",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "mrq9ODcY4K",
        "year": 2018,
        "make": "Kia",
        "model": "Optima",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "MLZdOGrBjJ",
        "year": 2018,
        "make": "Lamborghini",
        "model": "Huracan",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "rJCnYjFOwT",
        "year": 2018,
        "make": "Kia",
        "model": "Rio",
        "category": "Sedan, Hatchback",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "ErhwnyOIDC",
        "year": 2018,
        "make": "Land Rover",
        "model": "Discovery Sport",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "kV80KmMsOj",
        "year": 2018,
        "make": "Lexus",
        "model": "LC",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "9cJnPmJAvK",
        "year": 2018,
        "make": "Lexus",
        "model": "IS",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "VNMhuiei55",
        "year": 2018,
        "make": "Lincoln",
        "model": "MKC",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "JwAgsIY14J",
        "year": 2018,
        "make": "Lexus",
        "model": "RC",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "d6rGvhCEgB",
        "year": 2018,
        "make": "Land Rover",
        "model": "Range Rover Evoque",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "EjflK2oezr",
        "year": 2018,
        "make": "Lincoln",
        "model": "Continental",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "GhnFU0opPj",
        "year": 2018,
        "make": "Lexus",
        "model": "RX",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "AVA8HfQb25",
        "year": 2018,
        "make": "Lexus",
        "model": "LS",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "GHTBaBwBEH",
        "year": 2018,
        "make": "Land Rover",
        "model": "Range Rover Sport",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "X9qMYm3I2m",
        "year": 2018,
        "make": "Lexus",
        "model": "ES",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "iAKn3WmE5Y",
        "year": 2018,
        "make": "Lexus",
        "model": "NX",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "9UgnNJzaIc",
        "year": 2018,
        "make": "Lamborghini",
        "model": "Aventador",
        "category": "Convertible, Coupe",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "SwGavGCXOk",
        "year": 2018,
        "make": "Lexus",
        "model": "GX",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.263Z",
        "updatedAt": "2020-01-27T20:44:18.263Z"
    },
    {
        "objectId": "Q0snpBL9Tj",
        "year": 2018,
        "make": "Lincoln",
        "model": "MKT",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "AHfjxgM8xK",
        "year": 2018,
        "make": "Lincoln",
        "model": "Navigator L",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "PItC6QhNna",
        "year": 2018,
        "make": "Maserati",
        "model": "Quattroporte",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "KGLQ7JN4xT",
        "year": 2018,
        "make": "Maserati",
        "model": "Levante",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "Qqvf5GEzCw",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "GLS",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "NK2GVV8Ssk",
        "year": 2018,
        "make": "MAZDA",
        "model": "MX-5 Miata RF",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "O4RpSwsklJ",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "GLC Coupe",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "nE6KNif6WJ",
        "year": 2018,
        "make": "Lincoln",
        "model": "MKX",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "SuukHkkr3E",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "Mercedes-AMG G-Class",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "HPU8FJ4tKi",
        "year": 2018,
        "make": "MAZDA",
        "model": "CX-5",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "BvVePY8v2w",
        "year": 2018,
        "make": "Lotus",
        "model": "Evora 400",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "yUM5JvdmkF",
        "year": 2018,
        "make": "McLaren",
        "model": "570GT",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "vxnLUUrtOf",
        "year": 2018,
        "make": "Lincoln",
        "model": "Navigator",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "tppEtXaTjn",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "GLE",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "huciYfZqei",
        "year": 2018,
        "make": "Lincoln",
        "model": "MKZ",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "6wiCpEUxVn",
        "year": 2018,
        "make": "Maserati",
        "model": "GranTurismo",
        "category": "Coupe, Convertible",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "Ty4kcJAYGW",
        "year": 2018,
        "make": "McLaren",
        "model": "720S",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "EIH8gRBq7I",
        "year": 2018,
        "make": "Maserati",
        "model": "Ghibli",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "jPZN9FgFi8",
        "year": 2018,
        "make": "MAZDA",
        "model": "MAZDA6",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "9Yg5Cg3B1V",
        "year": 2018,
        "make": "McLaren",
        "model": "570S",
        "category": "Coupe, Convertible",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "SSMZwlmIl5",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "G-Class",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "GZCj51MKh9",
        "year": 2018,
        "make": "MAZDA",
        "model": "CX-9",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "7ZQRNEBW67",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "CLA",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "HIb0SLaSFm",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "CLS",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "NLCh3BqS9e",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "E-Class",
        "category": "Sedan, Coupe, Convertible, Wagon",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "hPDJFescoO",
        "year": 2018,
        "make": "MAZDA",
        "model": "MAZDA3",
        "category": "Sedan, Hatchback",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "YRgjSlaYvX",
        "year": 2018,
        "make": "MAZDA",
        "model": "MX-5 Miata",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "swsWeiRft1",
        "year": 2018,
        "make": "MAZDA",
        "model": "CX-3",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "LF0Im0UF9d",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "C-Class",
        "category": "Convertible, Coupe, Sedan",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "y4VQc62dH7",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "Mercedes-AMG GLE",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "QjzMFagPfC",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "Mercedes-AMG CLA",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "IAUc63JG99",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "Mercedes-AMG GLC Coupe",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "SlZTsGrenZ",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "Mercedes-AMG SLC",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "3EMyxl8CJn",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "Mercedes-AMG SL",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "uzUoh2pwTL",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "Mercedes-AMG GLC",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "Dq6fq2sspY",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "Mercedes-AMG E-Class",
        "category": "Sedan, Wagon",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "GDUK4bV8vh",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "Mercedes-AMG GLE Coupe",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "mn9ib1RNtm",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "Mercedes-AMG CLS",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "BAnHbFWtEc",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "Sprinter 2500 Crew",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "Ex8EzRDcX9",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "GLA",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "Riqo0gMZox",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "GLC",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "zTGxrw6DJr",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "SLC",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "koug6Sf2Rl",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "Mercedes-AMG GT",
        "category": "Coupe, Convertible",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "t0vuwFGYv9",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "Metris Passenger",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "I28IPbvQUm",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "Mercedes-AMG GLA",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "3V5050nXrb",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "Sprinter 2500 Cargo",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "kYeY0Gi99l",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "Mercedes-AMG GLS",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "nCuk4ajs5s",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "Mercedes-AMG C-Class",
        "category": "Convertible, Sedan, Coupe",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "yERgIqO11b",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "Metris WORKER Cargo",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "AuSNYkd2G4",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "Mercedes-AMG S-Class",
        "category": "Coupe, Convertible, Sedan",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "wBRLGeKd6A",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "Metris Cargo",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "0dAtYD141Z",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "Metris WORKER Passenger",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "F0yS4d1j16",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "Mercedes-Maybach S-Class",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "Sj02XSHP62",
        "year": 2018,
        "make": "Nissan",
        "model": "LEAF",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "G9zrlY3GCI",
        "year": 2018,
        "make": "MINI",
        "model": "Countryman",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "UfR8Wp6uSS",
        "year": 2018,
        "make": "Nissan",
        "model": "Armada",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "ZVh0Y8gAa3",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "SL",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "ar0IpXMbmy",
        "year": 2018,
        "make": "Mitsubishi",
        "model": "Outlander",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "oNJCkbiXjh",
        "year": 2018,
        "make": "Nissan",
        "model": "Altima",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "LemocimRul",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "Sprinter 3500 XD Cargo",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "ufOJFGgiR6",
        "year": 2018,
        "make": "MINI",
        "model": "Convertible",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "xrMrs8FQS8",
        "year": 2018,
        "make": "Nissan",
        "model": "Frontier King Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "8eBhjKBH0B",
        "year": 2018,
        "make": "MINI",
        "model": "Hardtop 2 Door",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "UTTMHHUkFc",
        "year": 2018,
        "make": "Mitsubishi",
        "model": "Outlander PHEV",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "Y7iileUceB",
        "year": 2018,
        "make": "MINI",
        "model": "Hardtop 4 Door",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "GdvGc2M5At",
        "year": 2018,
        "make": "MINI",
        "model": "Clubman",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "8f2Vud5ZCH",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "Sprinter 2500 Passenger",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "dHBZ9165gQ",
        "year": 2018,
        "make": "Nissan",
        "model": "Frontier Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "cORBiFMbiQ",
        "year": 2018,
        "make": "Mitsubishi",
        "model": "Mirage",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "SAJirMn0s0",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "Sprinter WORKER Cargo",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "5ItpAY7jB3",
        "year": 2018,
        "make": "Mitsubishi",
        "model": "Mirage G4",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "f5z8PkebBn",
        "year": 2018,
        "make": "Mitsubishi",
        "model": "Eclipse Cross",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "TyV6ZfnRXP",
        "year": 2018,
        "make": "Nissan",
        "model": "Maxima",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "ARU4SarENN",
        "year": 2018,
        "make": "Nissan",
        "model": "Murano",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "6BFENxUe8g",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "Sprinter 3500 Cargo",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "ddgyQvibMG",
        "year": 2018,
        "make": "Mercedes-Benz",
        "model": "S-Class",
        "category": "Sedan, Coupe, Convertible",
        "createdAt": "2020-01-27T20:44:18.296Z",
        "updatedAt": "2020-01-27T20:44:18.296Z"
    },
    {
        "objectId": "AmEbTiBuEp",
        "year": 2018,
        "make": "Mitsubishi",
        "model": "Outlander Sport",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "lkL7WAqI1e",
        "year": 2018,
        "make": "Nissan",
        "model": "TITAN XD Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "Jqnl8OQac9",
        "year": 2018,
        "make": "Nissan",
        "model": "NV3500 HD Passenger",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "d62LXnqGUr",
        "year": 2018,
        "make": "Nissan",
        "model": "NV200",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "9XR9ZEuNEp",
        "year": 2018,
        "make": "Nissan",
        "model": "370Z",
        "category": "Coupe, Convertible",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "CWcSTww0pB",
        "year": 2018,
        "make": "Nissan",
        "model": "Titan Crew Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "Lny8N0cwjf",
        "year": 2018,
        "make": "Nissan",
        "model": "NV3500 HD Cargo",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "FTvTCUi8xm",
        "year": 2018,
        "make": "Nissan",
        "model": "GT-R",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "y4HXKP37Eu",
        "year": 2018,
        "make": "Nissan",
        "model": "TITAN XD Single Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "ObaAAvOTcC",
        "year": 2018,
        "make": "Nissan",
        "model": "NV2500 HD Cargo",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "yKjSNJpKsf",
        "year": 2018,
        "make": "Nissan",
        "model": "Kicks",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "XPMJBJ1Mwt",
        "year": 2018,
        "make": "Nissan",
        "model": "TITAN XD King Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "FbWZOZyyeA",
        "year": 2018,
        "make": "Nissan",
        "model": "NV1500 Cargo",
        "category": "Van/Minivan",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "SyFgiJjDMh",
        "year": 2018,
        "make": "Nissan",
        "model": "TITAN Single Cab",
        "category": "Pickup",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "jf3H9uolva",
        "year": 2018,
        "make": "Nissan",
        "model": "Rogue Sport",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "BdAehTrB0h",
        "year": 2018,
        "make": "Porsche",
        "model": "718 Boxster",
        "category": "Convertible",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "UAZ6foKrCX",
        "year": 2018,
        "make": "Nissan",
        "model": "Rogue",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "9SOHGpuZrj",
        "year": 2018,
        "make": "Nissan",
        "model": "Sentra",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "E7Ci3jwVdD",
        "year": 2018,
        "make": "Porsche",
        "model": "911",
        "category": "Coupe, Convertible",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "m2MvCyXsKG",
        "year": 2018,
        "make": "Nissan",
        "model": "Versa",
        "category": "Sedan",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "Vd4cnhNAk0",
        "year": 2018,
        "make": "Nissan",
        "model": "Versa Note",
        "category": "Hatchback",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "EeSxMIZCN3",
        "year": 2018,
        "make": "Nissan",
        "model": "Pathfinder",
        "category": "SUV",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    },
    {
        "objectId": "mN2Zx8uPh9",
        "year": 2018,
        "make": "Porsche",
        "model": "718 Cayman",
        "category": "Coupe",
        "createdAt": "2020-01-27T20:44:18.297Z",
        "updatedAt": "2020-01-27T20:44:18.297Z"
    }
];

const route: ServerRoute = {
    method: 'GET',
    path: '/cars',
    options: {
        handler: function (request: Request, h: ResponseToolkit) {
            const query = request.query;
            let filteredCars = [...cars];   // use aa copy instead of the original

            Object.entries(query).forEach(([token, val]) => {
                filteredCars = filteredCars.filter((car: ICar) => car[(token as keyof ICar)].toString().toLowerCase().startsWith(val.toLowerCase()));
            });

            return h.response(filteredCars);
        },
    }
};



export default route;