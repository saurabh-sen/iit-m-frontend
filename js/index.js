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

const addbook = () => {
  let accessToken = getCookie("accessToken");
  let bookId = document.getElementById("book-id").value;
  let bookName = document.getElementById("book-name").value;
  // validate the input
  if (!bookId || !bookName) {
    alert("Please enter all the fields");
    return;
  }
  // make a post request to server with access token
  fetch("http://localhost:3000/addbook", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      bookId,
      bookName,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === 201) {
        //   alert("Book added successfully");
        window.location.reload();
      } else {
        alert("Something went wrong");
      }
    });
};

const updateBook = (id, data) => {
  const bookId = document.getElementById("update-book-id");
  const bookUniqueId = document.getElementById("book-unique-id");
  const bookName = document.getElementById("update-book-name");
  const bookStatus = document.getElementById("update-book-status");

  // filter the book with id
  const book = data.filter((book) => book._id === id);
  bookId.value = book[0].bookId;
  bookUniqueId.value = book[0]._id;
  bookName.value = book[0].bookName;
  if (book[0].bookStatus === "AVAILABLE") {
    bookStatus.checked = true;
  } else {
    bookStatus.checked = false;
  }
};

const updateSpecificBook = () => {
  let accessToken = getCookie("accessToken");
  const bookId = document.getElementById("update-book-id").value;
  const bookUniqueId = document.getElementById("book-unique-id").value;
  const bookName = document.getElementById("update-book-name").value;
  const bookStatus = document.getElementById("update-book-status").checked;
  // validate the input
  if (!bookId || !bookName) {
    alert("Please enter all the fields");
    return;
  }

  // console.log(bookId, bookUniqueId, bookName, bookStatus)
  // make a post request to server with access token and book id
  fetch(`http://localhost:3000/updatebook`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      bookUniqueId,
      bookId,
      bookName,
      bookStatus,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === 200) {
        alert("Book updated successfully");
        window.location.reload();
      } else {
        alert("Something went wrong "+ data.message);
      }
    });
};

const deleteBook = (id, data) => {
  let accessToken = getCookie("accessToken");
  let book = data.filter((book) => book._id === id)[0];
  let daleteOrNot = confirm(
    `Are you sure you want to delete this book named: ${book.bookName}?`
  );
  if (daleteOrNot) {
    fetch(`http://localhost:3000/deletebook`, {
      method: "DELETE",
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
          alert("Book deleted successfully");
          window.location.reload();
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => console.log(err));
  }
};

const addmember = () => {
  let accessToken = getCookie("accessToken");
  let membersUsername = document.getElementById("member-name").value;
  let membersPassword = document.getElementById("member-password").value;
  // validate the input
  if (!membersUsername || !membersPassword) {
    alert("Please enter all the fields");
    return;
  }
  // make a post request to server with access token
  fetch("http://localhost:3000/addmember", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      membersUsername,
      membersPassword,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === 201) {
        //   alert("Book added successfully");
        window.location.reload();
      } else {
        alert("Something went wrong " + data.message);
      }
    });
};

const updateMembers = (id, data) => {
  const membersUsername = document.getElementById("update-members-username");
  const membersPassword = document.getElementById("update-members-password");
  const membersId = document.getElementById("update-members-id");

  // filter the member with id
  const members = data.filter((members) => members._id === id);
  membersUsername.value = members[0].username;
  membersPassword.value = members[0].password;
  membersId.value = members[0]._id;
};

const updateSpecificMember = () => {
  let accessToken = getCookie("accessToken");
  const membersUsername = document.getElementById(
    "update-members-username"
  ).value;
  const membersPassword = document.getElementById(
    "update-members-password"
  ).value;
  const membersId = document.getElementById("update-members-id").value;
  // validate the input
  if (!membersPassword || !membersUsername) {
    alert("Please enter all the fields");
    return;
  }
  fetch(`http://localhost:3000/updatemembers`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      membersUsername,
      membersPassword,
      membersId,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === 200) {
        alert("Member updated successfully");
        window.location.reload();
      } else {
        alert("Something went wrong");
      }
    });
};

const deleteMembers = (id, data) => {
  let accessToken = getCookie("accessToken");
  let member = data.filter((member) => member._id === id)[0];
  // console.log(member);
  let daleteOrNot = confirm(
    `Are you sure you want to delete this member named: ${member.username}?`
  );
  if (daleteOrNot) {
    fetch(`http://localhost:3000/deletemember`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        membersId: member._id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          alert("Member deleted successfully");
          window.location.reload();
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => console.log(err));
  }
};
