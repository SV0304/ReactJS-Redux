export const selectTrainer=(trainer)=>{
	console.log("you have clicked on a trainer ",trainer.first);
	return{
		type:'TRAINER_SELECTED',
		payload:trainer
	}
}