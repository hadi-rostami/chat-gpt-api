function chackParametrs(req, res, next) {
  const { text } = req.query;

  if (!text  || !/^[\p{L}\p{N}\s]+$/u.test(text)) {
    return res.status(400).send({
      status: 400,
      message: "Invalid input or 'text' parameter is missing.",
      creator: "@HadiRostamiYT",
    });
  }

  next();
}

module.exports =  chackParametrs ;
