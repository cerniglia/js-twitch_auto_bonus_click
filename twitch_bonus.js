var el;const sleep=e=>new Promise((l=>setTimeout(l,e)));for(;;)(el=document.querySelectorAll("button[aria-label='Claim Bonus']")[0])?(console.log("Clicking BONUS button..."),el.click()):console.log("Waiting 2s for BONUS check..."),await sleep(2e3);
