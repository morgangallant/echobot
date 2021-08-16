// This is the main handler which echos requests.
const handler = async (req) => {
    operand.respond("Echoing:");
    operand.respond(req.message);
}