import { test} from '../Fixtures/Fixtures'

//const baseUrl = process.env.BASEURL || "http://www.example.com";

test('get started link', {tag:'@smoke'},async ({Login}) => {
  //console.log(process.env.BASEURL); 
  await Login.navigation("http://www.google.com");
  await Login.validateElementIsVisible();
});
