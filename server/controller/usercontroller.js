import usermodel from '../model/usermodel.js';

export const createData = async (req, res) => {
    const { userName, projectName, projectDescription, skillsAcquired } = req.body;

    try {
        if(!userName || !projectName || !projectDescription || !skillsAcquired) {
            return res.status(400).json({ message: 'Please fill in all fields' });
        }
        const userData = await usermodel.create({ userName, projectName, projectDescription, skillsAcquired });
        const newUser = new usermodel(userData);
        await newUser.save();
        res.status(201).json(newUser);
    }

    catch(error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
}