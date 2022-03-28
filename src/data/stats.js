export function getStats() {
    const storedDebates = JSON.parse(localStorage.getItem("debates"))

    let OG = [0, 0, 0, 0]
    let OO = [0, 0, 0, 0]
    let CG = [0, 0, 0, 0]
    let CO = [0, 0, 0, 0]

    for (let d of storedDebates) {
        switch (d.house) {
            case "1º Governo":
                OG = process(d, 0, OG)
                break;
        
            case "1ª Oposição":
                OO = process(d, 1, OO)
                break;
            
            case "2º Governo":
                CG = process(d, 2, CG)
                break;
            
            case "2ª Oposição":
                CO = process(d, 3, CO)
                break;
            
            default:
                break;
        }
    }

    return [OG, OO, CG, CO]
}

function process(d, i, house) {
    let place = d.call[i]

    if (place != 0) {
        house[place-1] += 1
    } 

    return house
}