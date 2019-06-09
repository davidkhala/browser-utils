async function ping(url) {
	const resp = await fetch(url);

	return await resp.text(); // .json() will throw error in cases
}
