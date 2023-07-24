import content from '../data/content.json'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';


const useContent = (lang, componentName) => {
	return [lang == "arabic" ? content.ar[componentName] : content.en[componentName]];
}
export default useContent;
