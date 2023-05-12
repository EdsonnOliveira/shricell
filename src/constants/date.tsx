export function getDateCurrent() {
    const date = new Date();
    let month = String(date.getMonth()+1).padStart(2, '0')
    let day = String(date.getDate()).padStart(2, '0')
    let year = String(date.getFullYear())
    
    return `${month}/${day}/${year}`
}

export function getFirstLastDay() {
    const date = new Date();
    let month = String(date.getMonth()+1).padStart(2, '0')
    let year = String(date.getFullYear())
    
    return {
        first: `${month}/01/${year}`,
        last: `${month}/31/${year}`
    }
}