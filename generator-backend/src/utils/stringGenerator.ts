export default function stringGenerator() {
    let result: string[][] = new Array();
    let alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
    let alphabetLength: number = alphabet.length;

    for (let i: number = 0; i < 10; i++) {
        let tempColumn: string[] = new Array();

        for(let j: number = 0; j < 10; j++) {
            tempColumn.push(alphabet.charAt(Math.floor(Math.random() * alphabetLength)));
        }

        result.push(tempColumn);
    }
    
    return result;
}
