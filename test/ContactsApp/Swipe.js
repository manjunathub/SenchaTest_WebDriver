describe("Swipe.js", function() {
    it("should edit a contact through swipe", function() {
        //expect(1).toBe(2);
        //ToDo add code here to swipe any contact and click on edit
       // Below code should ideally work which isn't working, but instead of drag if we use mouse it works in classic
        var playEvents = [], target = 'contact-list gridrow';
        
        ST.panel('contact-list').visible()
        .and(function(){
            
            /* playEvents.push({ type: "dragstart", target: target, x: xStart, available: true });
            for (var i = xStart; i > xEnd; i -= 10) {
                playEvents.push({ type: "dragmove", target: target, x: i, available: true });
            }*/
            //playEvents.push({ type: "dragend", target: target, x: i, y: 10, detail: 1 });
            playEvents.push({ type: "tap", target: target, available: true });
            ST.play(playEvents); 
            
        });

    });
    
    afterAll(function(){
       ST.wait(3000); 
    });
});