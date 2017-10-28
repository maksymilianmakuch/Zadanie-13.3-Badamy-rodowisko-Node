process.stdin.setEncoding('utf-8'); 
process.stdin.on('readable', function() {
	// metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.toString().trim();
		switch(instruction) {
			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
				break;
			case '/version': 
				process.stderr.write('The node version is ' + process.versions.node + '\n');
				break;
			default:
				process.stderr.write('Wrong instruction!');
		}
	}
});