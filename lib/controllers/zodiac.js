const { Router } = require('express');
const { zodiac } = require('../../data/zodiac');

const router = Router();
router
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const matchingZodiac = zodiac.find((zodiac) => zodiac.id === id);
    res.json(matchingZodiac); 
  })

  .get('/', (req, res) => {
    const zodiacData = zodiac.map((zodiac) => ({ id: zodiac.id, name: zodiac.name, symbol: zodiac.symbol, date: zodiac.dates
    }));
    res.json(zodiacData);
  });

module.exports = router;
