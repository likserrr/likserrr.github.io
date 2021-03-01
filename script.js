var el = document.getElementById('vanilla-demo');
var vanilla = new Croppie(el, {
    viewport: { type: 'circle', width: 100, height: 100 },
    boundary: { width: 200, height: 200 },
    showZoomer: true,
    enableOrientation: true,
});
vanilla.bind({
    url: 'demo/demo-2.jpg',
    orientation: 2
});

let link = document.getElementById('link');

document.getElementById('save').addEventListener('click', test)

function test () {
    vanilla.result('blob').then(function(blob) {
        link.href = URL.createObjectURL(blob);
    });
}