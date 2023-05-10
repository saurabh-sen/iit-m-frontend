function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function deleteCookie() {
  document.cookie =
    "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

const deleteAccount = (membersId) => {
  // console.log(membersId);
  if (confirm(`Are you sure you want to delete this account?`)) {
    let accessToken = getCookie("accessToken");
    fetch(`https://iit-m-backend.onrender.com/deletemember`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        membersId: membersId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          deleteCookie();
          alert("Account deleted successfully");
          window.location.reload();
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => console.log(err));
  }
};

const borrowBook = (id, data) => {
  let accessToken = getCookie("accessToken");
  let book = data.filter((book) => book._id === id)[0];
  let borrowOrNot = confirm(
    `Are you sure you want to borrow this book named: ${book.bookName}?`
  );
  if (borrowOrNot) {
    fetch(`https://iit-m-backend.onrender.com/borrowBook`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        bookId: book.bookId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          alert("Book Borrowed successfully");
          window.location.reload();
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => console.log(err));
  }
};

const returnBook = (id, data) => {
  let accessToken = getCookie("accessToken");
  let book = data.filter((book) => book._id === id)[0];
  let returnOrNot = confirm(
    `Are you sure you want to return this book named: ${book.bookName}?`
  );
  if (returnOrNot) {
    fetch(`https://iit-m-backend.onrender.com/returnBook`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        bookId: book.bookId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          alert("Book Returned successfully");
          window.location.reload();
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => console.log(err));
  }
};
