async function init() {
  try {
    // try : 요청이 성공했을 때 작동
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users);
  } catch (err) {
    // catch : 요청이 실패했을 때 작동
    console.log(err);
  }
}

init();
