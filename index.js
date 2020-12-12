import clipBoarder from 'clipboardy';
import colorsFun from 'colors';

const indentationFun = async ( ) => {

    const clipboard = await clipBoarder.readSync ( );

    try {

        if ( clipboard.length != 0 && clipboard.includes ( `GET` ) || clipboard.includes ( `POST` ) ) {
        
            const setUnique = new Set ( clipboard.split ( `\n` ) );
    
            let arrFilter = [ ...setUnique ].filter ( ( e ) => { return e != ""; } );
    
            var anotherFilter = arrFilter [ 0 ].match ( 'GET' ) ? anotherFilter = arrFilter.filter ( v => v ).slice ( 1 ) : anotherFilter = arrFilter.filter ( v => v ).slice ( 1 ).slice ( 0, -1 );
    
            await clipBoarder.writeSync ( `"${ anotherFilter.join ( '\n' ).replaceAll ( ': ', '": "' ).replace ( /\n/g, '", "' ) }"` );
            
        } else { 
            console.log ( colorsFun.red ( `Fail on indentation... [ Undetected Fiddler RAW Contents ]` ) );
        }

    } catch ( err ) {
        console.log ( colorsFun.yellow ( `Error Handler: ${ err } Maybe Permission Denied ?` ) );
    }
    
}

indentationFun ( );