import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom';
import './InputBox.css';
 

export default function InputBox() {

    // let [graphObj,setGraphObj] = useState({});
    const navigate=useNavigate()
   // Checkbox
   const centralityAlgo = ['DC','BC','CC','EC','IC']
 
   const handleChange = (e) => {
       const checkedID = e.target.id;
       console.log(checkedID);
   }
 
   // Textbox
   const [inputValue, setInputValue] = useState("");
   const onChangeHandler = (event) => {
       setInputValue(event.target.value);
   };
 
   const handleSubmit = () => {
       var inputNodes = cleanInputData(inputValue);
    //    console.log(inputNodes);
    //    for(let i=0;i<inputNodes.length;i++){
    //        let [src,dest] = inputNodes[i].split(' ');
    //        console.log(`src : ${src}`);
    //        console.log( `dest : ${dest}`);
    //    }
    let graphObjData = createLinkObjArray(inputNodes);
    console.log();
    // const graphJSON = JSON.stringify();
    // setGraphObj(graphObjData);
    //save in local storage 
    localStorage.setItem('dataKey', JSON.stringify(graphObjData));
    navigate("/CustomGraph");
   }
 
   function cleanInputData(input){
       input = input.trim();
       var inputNodes = input.split("\n");
       var allNodes = [];
       for(let i=0;i<inputNodes.length;i++){
           var data = inputNodes[i].replace(/  +/g, ' ');
           allNodes.push(data);
       }
       return allNodes;
   }
 
   const showFile = async (e) => {
       e.preventDefault()
       const reader = new FileReader()
       reader.onload = async (e) => {
         const text = (e.target.result)
         console.log(text)
         alert(text)
       };
       reader.readAsText(e.target.files[0])
     }
 
   return (
       <>
       <Link to="/"><button className='btn-home'>⬅ Home</button></Link>
       <div className="outside-box">
           {/* input box */}
           <div className="first-box">
               {/* <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
                   <div className="form-control w-full max-w-xs">
                       <label className="label">
                           <span className="label-text">JobID</span>
                       </label>
                       <input type="text" placeholder="please input your jobID" className="input input-accent w-full max-w-xs"/>
                   </div>
               </div> */}
 
               {/* checkbox */}
               <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">       
               <label className="label">
                           <span className="label-text">Centrality Algorithms</span>
                       </label>
                   <div className="form-control flex flex-row checkbox-container">
                       {centralityAlgo.map((item)=>(
                           <div className="flex flex-row">
                           <label className="label cursor-pointer">
                           <input type="checkbox" className="checkbox checkbox-xs" id={item} onChange={handleChange}/>
                           <span className="label-text checkbox-text">{item}</span>
                           </label>
                           </div>
                       ))}  
                   </div>
               </div>
 
               {/* textbox */}
               <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
                   <div className="form-control w-full max-w-xs">
                       <label className="label">
                           <span className="label-text">Input Data</span>
                       </label>
                       <textarea className="textarea textarea-accent" placeholder="Enter a list of identifiers" onChange={onChangeHandler} value={inputValue}></textarea>
                   </div>
               </div>
 
               <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
                   <div className="form-control w-full max-w-xs">
                       <label className="label">
                           <span className="label-text"><strong>OR</strong> Upload your own file</span>
                       </label>
                       <input type="file" onChange={(e) => showFile(e)} />
                    <button className="btn-grad" onClick={handleSubmit}>Submit</button>
                   </div>
               </div>
           </div>
 
       {/* Notice */}
       <div className="second-box">
           <div className="px-20">
           <div className="bg-yellow-100 rounded-lg py-5 px-6 mb-4 text-base text-yellow-700" role="alert">
               <span>
                   NOTICE: Enter or upload a list of identifiers which is a tab-delimited string for each row, for example:
                   <div className="pl-10">
                       P35202 &nbsp; P14164
                       <br/>
                       P35202 &nbsp; Q04174
                   </div>
                   Or you can choose a PPI network based on the organism name which you must select firstly in the right column!
               </span>
               </div>
           </div>
           </div>
       </div>
       </>
     )
}

// DATA ANALYSIS
let links = [];
function createLinkObjArray(inputNodes){
    for(let i=0;i<inputNodes.length;i++){
        let [src,dest] = inputNodes[i].split(' ');
        links.push({"source":src,"target":dest});
    }
    let networkObj = {
        "nodes" : nodes,
        "links" : links
    };
    return networkObj;
}

let nodes = [
    {"id":"P35202",
     "user":"GPC1_HUMAN",
     "description":"Cell surface proteoglycan that bears heparan sulfate. Binds, via the heparan sulfate side chains, alpha-4 (V) collagen and participates in Schwann cell myelination (By similarity). May act as a catalyst in increasing the rate of conversion of prion protein PRPN(C) to PRNP(Sc) via associating (via the heparan sulfate side chains) with both forms of PRPN, targeting them to lipid rafts and facilitating their interaction. Required for proper skeletal muscle differentiation by sequestering FGF2 in lipid rafts preventing its binding to receptors (FGFRs) and inhibiting the FGF-mediated signaling"
    },
     {
     "id":"P14164",
     "user":"ABF1_YEAST",
     "description":"General regulatory factor (GRF) that contributes to transcriptional activation of a large number of genes, as well as to DNA replication, silencing and telomere structure. Involved in the transcription activation of a subset of ribosomal protein genes. Binds the ARS-elements found in many promoters. Binds to the sequence 5'-TCN7ACG-3'. Influences on genome-wide nucleosome occupancy and affects chromatin structure, and probably dynamics. As a component of the global genome repair (GGR) complex, promotes global genome nucleotide excision repair (GG-NER) which removes DNA damage from nontranscribing DNA. Component of the regulatory network controlling mitotic and meiotic cell cycle progression."
    },{
      "id":"Q04174",
     "user":"SMP3_YEAST",
     "description":"Alpha-1,2-mannosyltransferase involved in glycosylphosphatidylinositol-anchor biosynthesis. Transfers a fourth mannose to trimannosyl-GPIs during GPI precursor assembly. The presence of a fourth mannose in GPI is essential in fungi. Involved in plasmid maintenance with SMP2."
    }
]
