const { createClient } = require("@supabase/supabase-js")

// --------- SupaBase Config ---------
const sbKey = process.env.SUPABASE_KEY
const sbUrl = process.env.SUPABASE_URL

exports.supabase = createClient(sbUrl, sbKey)

// -------- Helper  Functions -------- 

// Get a random element from an array
exports.get_random = (list) => {
    return list[Math.floor((Math.random()*list.length))];
}