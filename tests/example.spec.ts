import { test} from '../Fixtures/Fixtures'
import { RuntimeData } from '../utills/utills';

const runtimeData = new RuntimeData();

//const baseUrl = process.env.BASEURL || "http://www.example.com";

test('get started link', {tag:'@smoke'},async ({Login}) => {
  //console.log(process.env.BASEURL); 
  await Login.navigation("http://www.google.com");
  await Login.validateElementIsVisible();
  await runtimeData.setData('baseUrl', 'http://www.google.com');
})

test('get started link222', {tag:'@smoke'},async ({Login}) => {
  //console.log(process.env.BASEURL); 
  await Login.navigation("http://www.google.com");
  await Login.validateElementIsVisible();
  const data=await runtimeData.getData('baseUrl');
  console.log(data); // Should print "http://www.google.com"
})
