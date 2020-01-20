const { buildSchema} = require('graphql')

module.exports = buildSchema(`
type Booking {
    _id : ID!
    event: Event!
    user: User! 
    createdAt: String!
    updatedAt: String
}

#how my event schema will looks like eventually
type Event {
    _id: ID!
    title: String!
    description: String!
    price: Float!
    date: String!
    creator: User!
}
type User {
    _id : ID!
    email: String!
    password: String
    createdEvents: [Event!]
}
input UserInput {
    email: String!
    password: String!
}

input EventInput {
    title: String!
    description: String!
    price: Float!
    date: String! 
    creator: ID!
}
type RootQuery {
    events : [Event!]! #return array of Event objects
    bookings: [Booking!]!
}
type RootMutation {
    createEvent(eventInput: EventInput) : Event
    createUser(userInput : UserInput ) : User
    bookEvent(eventId: ID!) : Booking!
    cancelBooking(bookingId: ID!) : Event!  
}
    schema {
        query: RootQuery
        mutation:  RootMutation
    }
`)