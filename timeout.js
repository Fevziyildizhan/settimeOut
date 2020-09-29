<h1>Zamanlayıcı örnek window.setTimeOut()</h1>
<button onclick="uyariver()">3 saniye sonrası uyarı ver</button>
<button onclick="zamanlamaiptal()">zamanlamayı iptal et</button>



<script>
var timerId;

function uyariver(){
    timerId = window.setTimeout(zamanaliyici,3000)
}

function zamanaliyici(){
    alert('tıklama üzerinden 3000ms geçti')
}

function zamanlamaiptal(){
    Window.clear.setTimeout(timerId)
}
</script>
