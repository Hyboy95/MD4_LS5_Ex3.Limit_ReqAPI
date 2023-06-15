import axios from "axios";

export class PokemonController {
    static async getAllPokemon(req, res) {
        try {
            const url = 'https://pokeapi.co/api/v2/ability/?limit=20&offset=0';
            const response = await axios.get(url);
            const data = response.data;
            if (data) {
                res.status(200).json({ data: data })
            } else {
                res.status(500).json({
                    message: "Error"
                })
            }
        } catch (err) {
            res.status(500).json({
                message: err.message
            })
        }
    }
}