import { useEffect } from 'react';

const useGoogle = () => {

    useEffect(() => {

        const SCOPE = 'https://www.googleapis.com/auth/spreadsheets.readonly';
        const handleClientLoad = () => window.gapi.load('client:auth2', initClient);
    
        const initClient = () => {
            const discoveryUrl = "https://sheets.googleapis.com/$discovery/rest?version=v4";
            window.gapi.client.init({
                'clientId': "784867919246-8t8sb6af9ip9mu6n2bbi501gmjm6o0o4.apps.googleusercontent.com",
                'discoveryDocs': [discoveryUrl],
                'scope': SCOPE
            });
            console.log("Google loaded");
        };

        const script = document.createElement('script');

        script.src = "https://apis.google.com/js/api.js";
        script.async = true;
        script.defer = true;
        script.onload = handleClientLoad;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };

    }, []);
};

export default useGoogle;