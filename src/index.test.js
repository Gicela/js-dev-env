import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('our first test',() =>{
    it ('should pass', () =>{
        expect(true).to.equal(true);
    });
});

describe('index.htm', ()=> {
    it('should say hello', ()=>{
        const index = fs.readFileSync('./src/index.html', "utf-8");
        jsdom.env(index,function(err, window){
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).that.equal("Hello World!");
            done();
            window.close();
        });
    })
})
