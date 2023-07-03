// Remove comments

// Define all constants
const delayInMilli = 1000

const threeDotBtnPath = "/html/body/div[1]/div/div[1]/div/div[3]/div/div/div/div[1]/div[1]/div[2]/div/div/div/div/div/div[4]/div[2]/div[2]/div[2]/div/i"

const deletePostBtnPath = "/html/body/div[1]/div/div[1]/div/div[3]/div/div/div/div[2]/div/div/div[1]/div[1]/div/div/div/div/div/div/div[1]/div/div/div[2]/div/div/span"

const confirmDeleteBtnPath = "/html/body/div[1]/div/div[1]/div/div[4]/div/div/div[1]/div/div[2]/div/div/div/div/div/div/div[3]/div/div/div/div/div[1]/div/div/div[1]/div/span/span"

const getPostDate = "/html/body/div[1]/div/div[1]/div/div[3]/div/div/div/div[1]/div[1]/div[2]/div/div/div/div/div/div[4]/div[1]/div/div/div/div/div/h2/span/span"

const getPostTime = "/html/body/div[1]/div/div[1]/div/div[3]/div/div/div/div[1]/div[1]/div[2]/div/div/div/div/div/div[4]/div[2]/div[2]/div[1]/div/a/div[1]/div[2]/div/div/div/div[2]/span/div/div/span/span"

// get element by Xpath
function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

async function performDeleteAction(){
	
	try{
		await getElementByXpath(threeDotBtnPath).click()
		await setTimeout(()=>{}, 200)
		await getElementByXpath(deletePostBtnPath).click()
		// await setTimeout(()=>{}, 100)
		// await getElementByXpath(confirmDeleteBtnPath).click()
		await console.log(`Post deleted from >> ${getElementByXpath(getPostDate).textContent} @ ${getElementByXpath(getPostTime).textContent}`)
	}
	catch(err){}
}

const delay = async (ms = 1000) =>
  new Promise(resolve => setTimeout(resolve, ms))

setInterval(()=>{performDeleteAction()}, delayInMilli)