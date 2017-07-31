module.exports = {
  find: ( req, res, next ) => {
    const db = req.app.get('db');
    let { user, filter } = req.body;

    if ( filter !== 'birthday' ) {
      user[filter] = user[filter].toLowerCase();
    }

    db.recommended[filter]([ user.id, user[filter] ]).then( users => {
      res.status(200).send(users);
    }).catch( err => console.log( err ) );
  },

  add: ( req, res, next ) => { 
    const db = req.app.get('db');
    const { user, filter, friend_id } = req.body;

    db.friends.add_friend([ user.id, friend_id ]).then( () => {
      db.recommended[filter]([ user.id, user[filter].toLowerCase() ]).then( users => {
        res.status(200).send(users);
      }).catch( err => console.log( err ) );
    }).catch( err => console.log( err ) );
  }
};