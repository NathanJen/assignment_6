// Dog Harness
import BlackHarness from '../assets/blackHarness.png'
import RedHarness from '../assets/redHarness.png'
import PurpleHarness from '../assets/purpleHarness.png'
import PinkHarness from '../assets/pinkHarness.png'
import Yorkie from '../assets/yorkie.png'
import CloseUpOne from '../assets/closeup.png'
import CloseUpTwo from '../assets/dogCloseup.png'
import Buckle from '../assets/buckle.png'
// Cat Harness
import CatHarness from '../assets/catHarness.png'
import CatHarnessBlack from '../assets/catHarnessBlack.png'
import CatHarnessPurple from '../assets/catHarnessPurple.png'
import CatHarnessRed from '../assets/catHarnessRed.png'
// GPS Collar
import GPSCollar from '../assets/gpsCollar.png'
import GPSCollarPink from '../assets/gpsCollarPink.png'
import GPSCollarBlack from '../assets/gpsCollarBlack.png'
import GPSCollarRed from '../assets/gpsCollarRed.png'
// Food Storage
import FoodStorage from '../assets/foodStorage.png'
import FoodStorageBlack from '../assets/foodStorageBlack.png'
import FoodStoragePurple from '../assets/foodStoragePurple.png'
import FoodStorageRed from '../assets/foodStorageRed.png'
// Water Storage
import WaterStorage from '../assets/waterStorage.png'
import WaterStorageBlack from '../assets/waterStorageBlack.png'
import WaterStoragePurple from '../assets/waterStoragePurple.png'
import WaterStorageRed from '../assets/waterStorageRed.png'
// Travel Backpack
import TravelBackpack from '../assets/travelBackpack.png'
import TravelBackpackBlack from '../assets/travelBackpackBlack.png'
import TravelBackpackPurple from '../assets/travelBackpackPurple.png'
import TravelBackpackRed from '../assets/travelBackpackRed.png'

let Items = [
{
  "name": "Dog Harness",
  "type": "Harness",
  "category": "dog",
  "price": 20,
  "details": "Soft, stretchy, and resilient. A cushioned, lightweight harness that’s simple to secure and easy to link up with. An adjustable neck and chest for all shapes and sizes. Three leash attachment points because we all lead in different ways. Probably the smartest harness.",
  "colors": {
    "Strawberry": PinkHarness,
    "Blackberry": BlackHarness,
    "Crazyberry": PurpleHarness,
    "Fire Orange": RedHarness,
  },
  "specs": {
    "Materials": "Soft stretch poly base, woven nylon straps, coated carbon steel D-rings."
  },
  "closeups": {
    "one": Yorkie,
    "two": CloseUpOne,
    "three": CloseUpTwo,
    "four": Buckle,
  }
},
{
  "name": "Cat Harness",
  "type": "Harness",
  "category": "cat",
  "price": 20,
  "details": "Soft, stretchy, and resilient. A cushioned, lightweight harness that’s simple to secure and easy to link up with. An adjustable neck and chest for all shapes and sizes. Three leash attachment points because we all lead in different ways. Probably the smartest harness.",
  "colors": {
    "Strawberry": CatHarness,
    "Blackberry": CatHarnessBlack,
    "Crazyberry": CatHarnessPurple,
    "Fire Orange": CatHarnessRed,
  },
  "specs": {
    "Materials": "Soft stretch poly base, woven nylon straps, coated carbon steel D-rings."
  }
},
{
  "name": "GPS Collar",
  "type": "Collar",
  "category": "accessories",
  "price": 30,
  "details": "",
  "colors": {
    "Strawberry": GPSCollarPink,
    "Blackberry": GPSCollarBlack,
    "Crazyberry": GPSCollar,
    "Fire Orange": GPSCollarRed,
  },
  "specs": {
    "materials": "Soft stretch poly base, woven nylon straps, coated carbon steel D-rings."
  }
},
{
  "name": "Food Storage",
  "type": "Harness Attachment",
  "category": "accessories",
  "price": 10,
  "details": "",
  "colors": {
    "Strawberry": FoodStorage,
    "Blackberry": FoodStorageBlack,
    "Crazyberry": FoodStoragePurple,
    "Fire Orange": FoodStorageRed,
  },
  "specs": {
    "materials": "Soft stretch poly base, woven nylon straps, coated carbon steel D-rings."
  }
},
{
  "name": "Water Storage",
  "type": "Harness Attachment",
  "category": "accessories",
  "price": 10,
  "details": "",
  "colors": {
    "Strawberry": WaterStorage,
    "Blackberry": WaterStorageBlack,
    "Crazyberry": WaterStoragePurple,
    "Fire Orange": WaterStorageRed,
  },
  "specs": {
    "materials": "Soft stretch poly base, woven nylon straps, coated carbon steel D-rings."
  }
},
{
  "name": "Pet Backpack",
  "type": "Backpack",
  "category": "accessories",
  "price": 60,
  "details": "",
  "colors": {
    "Strawberry": TravelBackpack,
    "Blackberry": TravelBackpackBlack,
    "Crazyberry": TravelBackpackPurple,
    "Fire Orange": TravelBackpackRed,
  },
  "specs": {
    "materials": "Soft stretch poly base, woven nylon straps, coated carbon steel D-rings."
  }
},
];

export default Items

