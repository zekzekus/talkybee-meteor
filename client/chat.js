Meteor.Router.add({
    '/': 'home',
    '/rooms/:id': function(id) {
        Session.set('currentRoomId', id);
        return 'room';
    }
});

Template.rooms.helpers({
    rooms: function() { return Rooms.find(); }
});

Template.rooms.events({
    'submit form': function(event) {
        event.preventDefault();
        
        var room = {
            name: $(event.target).find('[name=name]').val(),
            members: 0,
            last_activity: '1 minute ago'
        };
        room._id = Rooms.insert(room);
        $(event.target).find('[name=name]').val('');
        Meteor.Router.to('room', room);
    }
});

Template.room.helpers({
    room: function() { 
        return Rooms.findOne(Session.get('currentRoomId')); 
    },
    messages: function() {
       return Messages.find({roomid: Session.get('currentRoomId')});
    }
});

Template.room.events({
    'submit form': function(event) {
        event.preventDefault();

        var message = {
            author: $(event.target).find('[name=nickname]').val(),
            text: $(event.target).find('[name=text]').val(),
            roomid: Session.get('currentRoomId')
        };

        Messages.insert(message);
        $(event.target).find('[name=text]').val('');
    }
});
