//Світлофор

const delay = (ms) => new Promise((ok) => setTimeout(ok, ms));

async function trafficLight() {
  while (true) {
    document.getElementById("red").style.backgroundColor = "";
    document.getElementById("yellow").style.backgroundColor = "";
    document.getElementById("green").style.backgroundColor = "";
    document.getElementById("green").style.backgroundColor = "green";
    await delay(3000);
    document.getElementById("green").style.backgroundColor = "";
    document.getElementById("yellow").style.backgroundColor = "yellow";
    await delay(1000);
    document.getElementById("yellow").style.backgroundColor = "";
    document.getElementById("red").style.backgroundColor = "red";
    await delay(3000);
  }
}

trafficLight();

//gql

async function gql(endpoint, query, variables) {
  const result = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query: query, variables: variables }),
  });
  const data = await result.json();
  return data;
}

//перевірка gql

(async () => {
  const catQuery = `query cats($q: String){
    CategoryFind(query: $q){
      _id name
    }
}`;
  const cats = await gql(
    "http://shop-roles.node.ed.asmer.org.ua/graphql",
    catQuery,
    { q: "[{}]" }
  );
  console.log(cats); //список категорій з _id name та всім таким іншим

  const loginQuery = `query login($login:String, $password:String){
    login(login:$login, password:$password)
  }`;

  const token = await gql(
    "http://shop-roles.node.ed.asmer.org.ua/graphql",
    loginQuery,
    { login: "test457", password: "123123" }
  );
  console.log(token);
})();

//jwtDecode

const jwtDecode = (token) => {
  try {
    const arr = token.split(".");
    const data = arr[1];
    const decodedData = JSON.parse(atob(data));
    return decodedData;
  } catch (e) {
    return "undefined";
  }
};

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2MzIyMDVhZWI3NGUxZjVmMmVjMWEzMjAiLCJsb2dpbiI6InRlc3Q0NTciLCJhY2wiOlsiNjMyMjA1YWViNzRlMWY1ZjJlYzFhMzIwIiwidXNlciJdfSwiaWF0IjoxNjY4MjcyMTYzfQ.rxV1ki9G6LjT2IPWcqkMeTi_1K9sb3Si8vLB6UDAGdw";
console.log(jwtDecode(token));

try {
  console.log(jwtDecode()); //undefined
  console.log(jwtDecode("дічь")); //undefined
  console.log(jwtDecode("ey.ey.ey")); //undefined
  console.log(
    "до сюди допрацювало, а значить jwtDecode не матюкався в консоль червоним кольором"
  );
} finally {
  console.log("ДЗ, мабуть, закінчено");
}
