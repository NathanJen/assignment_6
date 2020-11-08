// Dog Harness
// import StandardImage from '../assets/dogHarness.png'
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
// GPS Collar
import GPSCollar from '../assets/gpsCollar.png'
// Food Storage
import FoodStorage from '../assets/foodStorage.png'
// Water Storage
import WaterStorage from '../assets/waterStorage.png'
// Cat Backpack
import CatBackpack from '../assets/catBackpack.png'

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
    "Blackberry": "",
    "Crazyberry": "",
    "Fire Orange": "",
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
    "Strawberry": GPSCollar,
    "Blackberry": "",
    "Crazyberry": "",
    "Fire Orange": "",
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
    "Blackberry": "",
    "Crazyberry": "",
    "Fire Orange": "",
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
    "Blackberry": "",
    "Crazyberry": "",
    "Fire Orange": "",
  },
  "specs": {
    "materials": "Soft stretch poly base, woven nylon straps, coated carbon steel D-rings."
  }
},
{
  "name": "Cat Backpack",
  "type": "Backpack",
  "category": "accessories",
  "price": 60,
  "details": "",
  "colors": {
    "Strawberry": CatBackpack,
    "Blackberry": "",
    "Crazyberry": "",
    "Fire Orange": "",
  },
  "specs": {
    "materials": "Soft stretch poly base, woven nylon straps, coated carbon steel D-rings."
  }
},
];

export default Items

