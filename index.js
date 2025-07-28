

// https://solana-mainnet.g.alchemy.com/v2/LjryD1ZdvKo_71aNvqZlh

import express from "express"
import axios from "axios"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())



app.post('/api', async (req,res) => {
            const {walletAddress} = req.body
            
            console.log("Reached Here..");
            
            const response =await axios.post('https://solana-mainnet.g.alchemy.com/v2/LjryD1ZdvKo_71aNvqZlh',{
             
    "jsonrpc" : "2.0",
    "id" : "1",
    "method" : "getBalance",
    "params" : [walletAddress]
}
            )
            console.log(response);
            
            res.json(response.data)

            
    }
   
)

app.listen(3001)

// <p className="text-4xl font-bold">{balance.toFixed(6)} <span className="text-2xl text-gray-400">SOL</span></p> 