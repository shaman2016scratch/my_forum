export default function handler(req, res) {
  const UserIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  output = {}
  response = await fetch(`https://forum-shaman2016.vercel.com/user?ip=${UserIp}`);
  data = await response.json();
  output.if_user = data.ok
  output.user = data.userInfo
  output.roles = data.UserRoles
  output.isAdmin = data.isAdmin
  output.created = data.created
  res.status(200).json(output);
}
