// Tell me about a problem that you enjoyed troubleshooting




// A customer writes in with this question:
// "I've got a table1.data property that is an array of objects like this "{name: "Joe", email: "joe@test.com", sales: 53}".
//  How do I get an array of the email values from all of the objects using JS?"
// Format your response as if you were replying to them.


let userEmailsArr = table1.data.map((user) => user.email)



/*
Another customer writes in: "I have an array of multiple orderId's
that match different records in the orders table on my postgres db.
Using that array, how can I get all of the customers on the users
table who placed those specific orders?"✱
*/
let ids = [1,2,3,4,5]

// Select username from usertable
// join orderstable
// On userId == orderstable.userId
