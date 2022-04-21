const jwt = require("jsonwebtoken");
const secret = "Manchester Orchestra";
const expiration = "2h";

module.exports = {
  // allows token to be sent via req.body, req.query, or headers
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;
    //separate "Bearer" from <tokenvalue>
    
    if (req.headers.authorization) {   
       
      token = token
      .split(' ')
      .pop()
      .trim();
    }
    // if no token, return request object as is
    if (!token) {
      return req;
    }
    try {
      // decode and attach user data to request object
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      console.log('data',data)
      req.user = data
    } catch {
      console.log("Invalid token");
    }
    // return updated request object
    return req;
  },
  signToken: function ({role, userName, email, _id }) {
    const payload = {role, userName, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
