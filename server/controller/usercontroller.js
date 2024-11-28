import usermodel from '../model/usermodel.js';

export const createData = async (req, res) => {
    const { userName, projectName, projectDescription, skillsAcquired, Image } = req.body;

    try {
        const userData = await usermodel.create({ userName, projectName, projectDescription, skillsAcquired });

        if(!userName || !projectName || !projectDescription || !skillsAcquired) {
            return res.status(400).json({ message: 'Please fill in all fields' });
        }

        const newUser = new usermodel(userData);
        await newUser.save();
        res.status(201).json(newUser);
    }

    catch(error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
}

export const getData = async (req, res) => {
    try {
        const userData = await usermodel.find({});
        res.status(200).json(userData);
    }

    catch(error) {
        res.status(404).json({ message: error.message });
        console.log('');
    }
}

