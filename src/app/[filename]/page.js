"use client";
import { clearTranscriptionItems } from "@/libs/awsTranscriptionsHelpers";
import axios from "axios";
import { useEffect, useState } from "react";
import ResultVideo from "@/components/ResultVideo";
import TranscriptionEditor from "@/components/TranscriptionEditor";

export default function FilePage({ params }) {
  const filename = params.filename;
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [awsTranscriptionItems, setAwsTransciptionItems] = useState([]);
  const [isFethingInfo, setIsFetchingInfo] = useState(false);

  useEffect(() => {
    getTranscription();
  }, [filename]);

  function getTranscription() {
    setIsFetchingInfo(true);

    axios.get("/api/transcribe?filename=" + filename).then((response) => {
      setIsFetchingInfo(false);
      const status = response.data?.status;
      const transcription = response.data?.transcription;
      if (status === "IN_PROGRESS") {
        setIsTranscribing(true);
        setTimeout(getTranscription, 3000);
      } else {
        setIsTranscribing(false);

        setAwsTransciptionItems(
          clearTranscriptionItems(transcription.results.items)
        );
      }
    });
  }


  if (isTranscribing) {
    return <div>Transcribing your video...</div>;
  }

  if (isFethingInfo) {
    return <div>Fetching information...</div>;
  }

  return (
    <div>
      <div className="grid sm:grid-cols-2 gap-8 sm:gap-16 mt-12">
        <div className="">
          <h2 className="text-2xl mb-4 text-white/60">Transcriptions</h2>
          <TranscriptionEditor 
          awsTranscriptionItems={awsTranscriptionItems}
          setAwsTranscriptionItems={setAwsTransciptionItems} />
        </div>
        <div>
          <h2 className="text-2xl mb-4 text-white/60">Results</h2>
          <ResultVideo 
          filename={filename} 
          transcriptionItems ={awsTranscriptionItems} />
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}
