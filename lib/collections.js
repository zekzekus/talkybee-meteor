Rooms = new Meteor.Collection('rooms');
Messages = new Meteor.Collection('messages');

//if (Meteor.isServer && Rooms.find().count() === 0) {
    //var rooms = [
        //{name: 'Meteor Talk', members: 3, last_activity: '1 minute ago'},
        //{name: 'Meteor Development', members: 2, last_activity: '5 minutes ago'},
        //{name: 'Meteor Core', members: 0, last_activity: '3 days ago'}
    //];
    //_.each(rooms, function(room) {
        ////room_id = Rooms.insert(room);
        //var messages = [
            //{roomid: room_id, author: "test", text: "naber"},
            //{roomid: room_id, author: "ali", text: "iyidir"}
        //];
        //_.each(messages, function(message) {
            ////Messages.insert(message);
        //});
    //});
//}  
