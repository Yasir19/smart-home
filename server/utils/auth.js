const jwt = require('jsonwebtoken');
const secret =" Manchester Orchestra";const expiration = "2h";

module.exports ={ 
    authMiddleware: function ({ req }) {
        // allow token to be sent via req,body, req.query or headers
        let token = req.body.token || req.query.token || req.headres.authorization;

         //separate "Bearer" from <tokenvalue>
         if(req.headers.authorization) {
             token = token.split(' ').pop().trim();
         }
         // if no token, return request object as is
         if(!token) {
             return req;
         }
         try {
             // decode and attach user data to request object
             const { data } = jwt.verify(token, secret, {maxAge: expiration})
             req.user =data;
         } catch { 
             console.log('Invalid token');
         }
         // return updated request object 
         return req;
    },
    signToken: function ({username, email, _id}){
        const payload = {username, email, _id};
        return jwt.sign ({data:payload}, secret, {expiresIn: expiration})
    }
};