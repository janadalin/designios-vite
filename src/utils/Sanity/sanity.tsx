import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
    projectId: '6e14br0f',
    dataset: 'app-site',
    useCdn: false,
    apiVersion: '2023-08-11'
};

export default createClient(config);