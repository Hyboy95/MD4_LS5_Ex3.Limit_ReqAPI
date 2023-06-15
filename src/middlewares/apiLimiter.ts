import rateLimit from 'express-rate-limit';
export const apiLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 3, // Limit each IP to 3 requests per `window` (here, per 15 minutes)
    handler: function (req, res) {
        res.status(429).json({
            message: 'Too many requests!'
        });
    }
})